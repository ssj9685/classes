import classes from "./classes.js";

class A {
  a() {
    console.log("a");
  }
}

class B {
  b() {
    console.log("b");
  }
}

class C {
  c() {
    console.log("c");
  }
}

class D extends classes(A, B, C) {}
const d = new D();
d.a();
