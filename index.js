const fs = require('fs'); 
const { parse } = require('csv-parse');
const csvWriter = require('csv-write-stream');
const { listMatrixConversion, rotatematrix, isSquare } = require('./helper');
const args = process.argv.slice(2);
let writer = csvWriter()


function verifyInputParams(args){
    const pattern = /.*\.csv$/;
    if(args.length !== 2 || !pattern.test(args[0]) || !pattern.test(args[1]) || args[0] === args[1]){
        console.log('please provide valid input params')
        return false
    }
    processCsvFile(args[0],args[1])
    return true
}

function processCsvFile(inputFile, outputFile){
    let headder=[];
    if(fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile);
    }
    if (fs.existsSync(inputFile)) {
        fs.createReadStream(inputFile).pipe(parse({delimiter: ','}))
            .on('data', function(csvrow) {
                if(headder.length===0){
                    headder = csvrow;
                    headder.push("is_valid")
                    writer = csvWriter({ headers: headder });
                    writer.pipe(fs.createWriteStream(outputFile, {flags: 'w'}));
                    writer.write('\n')
                }else{
                    writer = csvWriter({sendHeaders: false});
                    writer.pipe(fs.createWriteStream(outputFile, {flags: 'a'}));
                    let arr = JSON.parse(csvrow[1])
                    if(isSquare(arr.length)){
                        let tempArr =  listMatrixConversion( arr, Math.sqrt(arr.length) )
                        tempArr = rotatematrix(tempArr)
                        writer.write({'id':csvrow[0],"json":JSON.stringify(tempArr),"is_valid": true})
                    } else {
                        writer.write({'id':csvrow[0],"json":JSON.stringify([]),"is_valid": false})
                    }      
                }
            })
            .on('end',function() {
                writer.end();
            })
            .on("error", function (error) {
                console.log(error.message);
            });
    }
}


verifyInputParams(args)

module.exports = verifyInputParams