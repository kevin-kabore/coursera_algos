/*
    Dynamic connectivity

    Given a set of N objects
        - Union() command: connect two objects.
        - Find()/Connected() query: is there a path connecting the two objects

        ex: 
        union(4,3)
        union(3,8)
        union(6,5)
        union(9,4)
        union(2,1)
        connected(0,7) => false
        connected(8,9) => true
        union(5,0)
        union(7,2)
        union(6,1)
        union(1,0)
        connected(7,0) => true

*/

/*
    Goal: Design efficient data structure for union-find
    - Objects N can be huge
    - Operations M can be huge
    - Find and Union queries may be intermixed

    Design:
    - Create a class, contructor takes N and initializes with N objects, 0 to N-1
    - Method union(int1, int2)
    - Method connected(int1, int2) => boolean if two components connected
    - find(int)
    - count() number of components

*/

class QuickFindUF {
    constructor(n) {
        this.ids = new Array(n);
        for(var i = 0; i < n; i++) this.ids[i] = i;
    }

    /**
     * chase parent pointers until reach root
     */
    root(i) {
        while (i !== this.ids[i]) i = this.ids[i];
        return i;
    }
    
    /**
     * check if p and q have same root
     */
    connected(p, q) {
        return this.root(p) === this.root(q);
    }

    /**
     * change root of p to point to root of q
     */
    union(p, q) {
        let i = this.root(p),
            j = this.root(j);

        this.ids[i] = j;
    }
    
}