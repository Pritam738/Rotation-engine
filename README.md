# Rotation-engine
Given a CSV file representing a series of tables, implement a rotation engine that parses, verifies and rotates each

The input file is the first and only argument to the program. Output should be
written to stdout (aka printed to the screen).

# Input

The input will be a CSV file with the columns id and json. You can assume id
to be a string and json to be a string (JSON encoded data).

```
id,json
1,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"
2,"[40, 20, 90, 10]"
3,"[-5]"
9,"[2, -0]"
5,"[2, -5, -5]"
8,"[1, 1, 1, 1, 1]”
```

# Output

The output should be a CSV-encoded series of rotated tables with the
columns id, json and is_valid. The latter is an indicator of whether or not
a given table is valid, if it is not, json should be an empty array.

```
id,json,is_valid
1,"[4, 1, 2, 7, 5, 3, 8, 9, 6]",true
2,"[90, 40, 10, 20]",true
3,"[-5]",true
9,"[]",false
5,"[]",false
8,”[]",false
```

# Theory

You work with a list of numbers that represent a table your program has to
interpret correctly. Since there is nothing but a flat list, the program has to
infer the rows and columns from this data, if needed.
If the square edge length is odd and there is a singular field in the middle of
the table, it is not moved.

![Screenshot 2022-10-13 132748](https://user-images.githubusercontent.com/10485635/195536962-f6a7bb6b-17ab-4332-90a1-aa0f519534e5.png)


