# data access

given: value array in json-stat, which encodes a multi-dim cube in a linear fashion (row-major).

wanted: index in array for any cell, adressed by position of each dimension.

## example

3 dims: [2,3,2]

     i  c b a
     0  0 0 0
     1  0 0 1
     2  0 1 0
     3  0 1 1
     4  0 2 0
     5  0 2 1
     6  1 0 0
     7  1 0 1
     8  1 1 0
     9  1 1 1
    10  1 2 0
    11  1 2 1

what's the index of [1,1,0] ?

## "ordinal valences" (ordinale Wertigkeit, Wertigkeit einer Stelle)

ordinal positions: c=2, b=1, a=0

inc after n ticks for each number at ordinal position:

    a            (1*)2      wraps every 2nd tick
    b        2*3            wraps every 6th tick (depends on a)
    c    6*2                wraps every 12th tick (depends on b, transitively)

so, from

    maximals      [2,3,2]

we get:

    ordinalValues [6,2,1]

then:

    index = coeff3*c + coeff2*b + coeff1*a

### example

    coeff [1,1,0] ->  1*6 + 1*2 + 0*1 = 8

# reverse operation

given a number and valencies, disaggregate it into it's coefficients (components).

## example

    given:
    valencies [6,2,1]
    number 11

    wanted:
    [?,?,?]

            c b a
    11-6=5  1
    5-2=3    1
    3-2=1    2
    1-1=0      1

        [1,2,1] = 11
