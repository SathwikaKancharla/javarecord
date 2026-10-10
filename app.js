const Q=(t,q,c,o,nt)=>({t,q,c,o,nt});
const r=String.raw,P=(t,q,c,o)=>({t,q,c,o});
const WEEKS=[
{n:1,title:"Comparative Table of Languages",progs:[],table:[["Feature","Java","C","C++","Python","JavaScript"],
["Paradigm","Object-oriented","Procedural","Procedural + OOP","Multi-paradigm","Multi-paradigm (event-driven)"],
["Typing","Static, strong","Static, weak","Static","Dynamic, strong","Dynamic, weak"],
["Execution","Compiled to bytecode, run on JVM","Compiled to machine code","Compiled to machine code","Interpreted","Interpreted / JIT in browser"],
["Platform independence","Yes (WORA)","No","No","Yes","Yes (browser/Node)"],
["Memory management","Automatic (Garbage Collector)","Manual","Manual","Automatic","Automatic"],
["Pointers","Not supported","Supported","Supported","Not supported","Not supported"],
["Multiple inheritance","Via interfaces","N/A","Supported","Supported","Via mixins/prototypes"],
["Speed","Fast","Very fast","Very fast","Slower","Moderate"],
["Syntax","Verbose","Concise","Moderate","Very simple","Simple"],
["File extension",".java",".c",".cpp",".py",".js"],
["Common uses","Enterprise, Android, web backends","OS, embedded systems","Games, system software","AI/ML, data science, scripting","Web front-end &amp; back-end"]]},
{n:2,title:"JDK Installation (Windows)",progs:[
{t:"Oracle JDK Installation — Windows",q:"To install Oracle JDK on Windows and verify the installation.",steps:["Open the Oracle Java Downloads page (oracle.com/java/technologies/downloads).","Select the <b>Windows</b> tab and download the x64 Installer (.exe).","Double-click the installer and click <b>Next</b>; keep the default path (C:\\Program Files\\Java\\jdk-xx) and click <b>Next</b> then <b>Close</b>.","Open <b>Environment Variables</b> → New system variable <code>JAVA_HOME</code> = JDK folder path.","Edit <b>Path</b> → add <code>%JAVA_HOME%\\bin</code>.","Open Command Prompt and run <code>java -version</code> and <code>javac -version</code>."],c:"C:\\> java -version\nC:\\> javac -version",o:'java version "21.0.2" 2024-01-16 LTS\nJava(TM) SE Runtime Environment (build 21.0.2+13-LTS-58)\nJava HotSpot(TM) 64-Bit Server VM (build 21.0.2+13-LTS-58, mixed mode, sharing)\n\njavac 21.0.2'},
{t:"OpenJDK Installation — Windows",q:"To install OpenJDK on Windows and verify the installation.",steps:["Download the OpenJDK Windows x64 zip from jdk.java.net (or Adoptium Temurin).","Extract the zip to a folder such as <code>C:\\Java\\openjdk-21</code>.","Set system variable <code>JAVA_HOME</code> = <code>C:\\Java\\openjdk-21</code>.","Add <code>%JAVA_HOME%\\bin</code> to the <b>Path</b> variable and click OK.","Open a new Command Prompt and run <code>java -version</code> and <code>javac -version</code>."],c:"C:\\> java -version\nC:\\> javac -version",o:'openjdk version "21.0.2" 2024-01-16\nOpenJDK Runtime Environment (build 21.0.2+13-58)\nOpenJDK 64-Bit Server VM (build 21.0.2+13-58, mixed mode, sharing)\n\njavac 21.0.2'}]},
{n:3,title:"Java Basics",progs:[
P("Hello, Java!","Display \"Hello, Java!\" and show the basic structure of a Java program.",r`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,"Hello, Java!"),
P("Primitive Data Types","Declare byte, short, int, long, float, double, char and boolean variables and display them.",r`public class DataTypes {
    public static void main(String[] args) {
        byte b = 100;
        short s = 20000;
        int i = 500000;
        long l = 9876543210L;
        float f = 3.14f;
        double d = 99.99;
        char c = 'A';
        boolean flag = true;
        System.out.println("byte    : " + b);
        System.out.println("short   : " + s);
        System.out.println("int     : " + i);
        System.out.println("long    : " + l);
        System.out.println("float   : " + f);
        System.out.println("double  : " + d);
        System.out.println("char    : " + c);
        System.out.println("boolean : " + flag);
    }
}`,r`byte    : 100
short   : 20000
int     : 500000
long    : 9876543210
float   : 3.14
double  : 99.99
char    : A
boolean : true`),
P("Arithmetic on Integers","Perform +, -, *, / and % on two integers.",r`public class IntArithmetic {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
        System.out.println("Modulus        : " + (a % b));
    }
}`,r`Addition       : 26
Subtraction    : 14
Multiplication : 120
Division       : 3
Modulus        : 2`),
P("Arithmetic on Floating-Point Numbers","Perform arithmetic operations on floating-point numbers.",r`public class FloatArithmetic {
    public static void main(String[] args) {
        double a = 10.5, b = 2.5;
        System.out.println("Addition       : " + (a + b));
        System.out.println("Subtraction    : " + (a - b));
        System.out.println("Multiplication : " + (a * b));
        System.out.println("Division       : " + (a / b));
    }
}`,r`Addition       : 13.0
Subtraction    : 8.0
Multiplication : 26.25
Division       : 4.2`),
P("Character Data Type","Display a character and its ASCII/Unicode value.",r`public class CharDemo {
    public static void main(String[] args) {
        char ch = 'A';
        int code = ch;
        System.out.println("Character : " + ch);
        System.out.println("ASCII/Unicode value : " + code);
        System.out.println("Unicode of 97 : " + (char) 97);
    }
}`,r`Character : A
ASCII/Unicode value : 65
Unicode of 97 : a`),
P("Boolean Expressions","Demonstrate boolean variables and relational operators.",r`public class BooleanDemo {
    public static void main(String[] args) {
        int a = 10, b = 20;
        boolean result = a < b;
        System.out.println("a > b  : " + (a > b));
        System.out.println("a < b  : " + (a < b));
        System.out.println("a == b : " + (a == b));
        System.out.println("a != b : " + (a != b));
        System.out.println("a >= b : " + (a >= b));
        System.out.println("a <= b : " + (a <= b));
        System.out.println("Stored result : " + result);
    }
}`,r`a > b  : false
a < b  : true
a == b : false
a != b : true
a >= b : false
a <= b : true
Stored result : true`),
P("Declaring and Initializing Variables","Declare and initialize different types of variables and display them.",r`public class Variables {
    public static void main(String[] args) {
        int age = 19;
        double cgpa = 8.9;
        char grade = 'A';
        String name = "Sathwika";
        boolean passed = true;
        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("CGPA   : " + cgpa);
        System.out.println("Grade  : " + grade);
        System.out.println("Passed : " + passed);
    }
}`,r`Name   : Sathwika
Age    : 19
CGPA   : 8.9
Grade  : A
Passed : true`),
P("Swapping Two Variables","Swap two variables using a temporary variable.",r`public class Swap {
    public static void main(String[] args) {
        int a = 10, b = 20, temp;
        System.out.println("Before swap: a = " + a + ", b = " + b);
        temp = a;
        a = b;
        b = temp;
        System.out.println("After swap : a = " + a + ", b = " + b);
    }
}`,r`Before swap: a = 10, b = 20
After swap : a = 20, b = 10`),
P("Widening Type Conversion","Demonstrate automatic (widening) type conversion.",r`public class Widening {
    public static void main(String[] args) {
        int i = 100;
        long l = i;
        float f = l;
        double d = f;
        System.out.println("int    : " + i);
        System.out.println("long   : " + l);
        System.out.println("float  : " + f);
        System.out.println("double : " + d);
    }
}`,r`int    : 100
long   : 100
float  : 100.0
double : 100.0`),
P("Narrowing Type Casting","Demonstrate explicit (narrowing) type casting.",r`public class Narrowing {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d;
        int big = 130;
        byte b = (byte) big;
        System.out.println("double : " + d);
        System.out.println("int    : " + i);
        System.out.println("130 cast to byte : " + b);
    }
}`,r`double : 9.78
int    : 9
130 cast to byte : -126`),
P("Character and ASCII Conversion","Convert between characters and ASCII values.",r`public class CharAscii {
    public static void main(String[] args) {
        char ch = 'a';
        int ascii = (int) ch;
        int num = 66;
        char c2 = (char) num;
        System.out.println("Character 'a' -> ASCII : " + ascii);
        System.out.println("ASCII 66 -> Character : " + c2);
    }
}`,r`Character 'a' -> ASCII : 97
ASCII 66 -> Character : B`),
P("Even or Odd","Check whether a number is even or odd.",r`public class EvenOdd {
    public static void main(String[] args) {
        int n = 7;
        if (n % 2 == 0)
            System.out.println(n + " is Even");
        else
            System.out.println(n + " is Odd");
    }
}`,"7 is Odd"),
P("Largest of Two Numbers","Find the largest of two numbers.",r`public class Largest {
    public static void main(String[] args) {
        int a = 45, b = 32;
        if (a > b)
            System.out.println(a + " is the largest");
        else
            System.out.println(b + " is the largest");
    }
}`,"45 is the largest"),
P("Reserved Keywords","Display some of Java's reserved keywords.",r`public class Keywords {
    public static void main(String[] args) {
        String[] keywords = {"class", "public", "static", "void", "int",
                             "if", "else", "for", "while", "return", "new", "this"};
        System.out.println("Some Java reserved keywords:");
        for (String k : keywords)
            System.out.println(k);
    }
}`,`Some Java reserved keywords:\nclass\npublic\nstatic\nvoid\nint\nif\nelse\nfor\nwhile\nreturn\nnew\nthis`),
P("For Loop: 1 to 10","Print numbers 1 to 10 using a for loop.",r`public class ForLoop {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++)
            System.out.print(i + " ");
    }
}`,"1 2 3 4 5 6 7 8 9 10")]},
{n:4,title:"No Programming Task",progs:[],note:"No programming task was assigned this week."},
{n:5,title:"No Programming Task",progs:[],note:"No programming task was assigned this week."},
{n:6,title:"Classes, Objects & Methods",progs:[
P("Student Information System","Create a Student Information System using classes, objects, instance variables and methods.",r`class Student {
    int id; String name; String branch;
    void display() {
        System.out.println("ID     : " + id);
        System.out.println("Name   : " + name);
        System.out.println("Branch : " + branch);
    }
}
public class StudentInfo {
    public static void main(String[] args) {
        Student s = new Student();
        s.id = 101; s.name = "Sathwika"; s.branch = "AI&ML";
        s.display();
    }
}`,`ID     : 101\nName   : Sathwika\nBranch : AI&ML`),
P("Employee Information System","Create an Employee Information System using a class, object, variables and methods.",r`class Employee {
    int empId; String name; double salary;
    void display() {
        System.out.println("Emp ID : " + empId);
        System.out.println("Name   : " + name);
        System.out.println("Salary : " + salary);
    }
}
public class EmployeeInfo {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.empId = 501; e.name = "Ravi"; e.salary = 45000.0;
        e.display();
    }
}`,`Emp ID : 501\nName   : Ravi\nSalary : 45000.0`),
P("Book Details — Multiple Objects","Create three Book objects and display their ID, title and author.",r`class Book {
    int id; String title, author;
    Book(int id, String title, String author) {
        this.id = id; this.title = title; this.author = author;
    }
    void display() { System.out.println(id + " | " + title + " | " + author); }
}
public class BookDetails {
    public static void main(String[] args) {
        Book b1 = new Book(1, "Java: The Complete Reference", "Herbert Schildt");
        Book b2 = new Book(2, "Head First Java", "Kathy Sierra");
        Book b3 = new Book(3, "Effective Java", "Joshua Bloch");
        b1.display(); b2.display(); b3.display();
    }
}`,`1 | Java: The Complete Reference | Herbert Schildt\n2 | Head First Java | Kathy Sierra\n3 | Effective Java | Joshua Bloch`),
P("Array of Student Objects","Create an array of five Student objects, accept their details and display them.",r`import java.util.Scanner;
class Student {
    int id; String name;
}
public class StudentArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student[] arr = new Student[5];
        for (int i = 0; i < 5; i++) {
            arr[i] = new Student();
            System.out.print("Enter ID and name of student " + (i + 1) + ": ");
            arr[i].id = sc.nextInt();
            arr[i].name = sc.next();
        }
        System.out.println("\nStudent Details");
        for (Student s : arr)
            System.out.println(s.id + " " + s.name);
    }
}`,`Enter ID and name of student 1: 1 Sathwika
Enter ID and name of student 2: 2 Anitha
Enter ID and name of student 3: 3 Kiran
Enter ID and name of student 4: 4 Sneha
Enter ID and name of student 5: 5 Ravi

Student Details
1 Sathwika
2 Anitha
3 Kiran
4 Sneha
5 Ravi`),
P("Reference Assignment","Assign one object reference variable to another.",r`class Box { int value = 10; }
public class RefAssign {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = b1;
        b2.value = 50;
        System.out.println("b1.value = " + b1.value);
        System.out.println("b2.value = " + b2.value);
    }
}`,`b1.value = 50\nb2.value = 50`),
P("Comparing Object References","Compare two object references using ==.",r`class Box { int value = 10; }
public class RefCompare {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box();
        Box b3 = b1;
        System.out.println("b1 == b2 : " + (b1 == b2));
        System.out.println("b1 == b3 : " + (b1 == b3));
    }
}`,`b1 == b2 : false\nb1 == b3 : true`),
P("Calculator Using Methods","Create methods for addition, subtraction, multiplication and division.",r`class Calculator {
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int mul(int a, int b) { return a * b; }
    double div(int a, int b) { return (double) a / b; }
}
public class CalcDemo {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Addition       : " + c.add(20, 5));
        System.out.println("Subtraction    : " + c.sub(20, 5));
        System.out.println("Multiplication : " + c.mul(20, 5));
        System.out.println("Division       : " + c.div(20, 5));
    }
}`,`Addition       : 25\nSubtraction    : 15\nMultiplication : 100\nDivision       : 4.0`),
P("Rectangle Operations","Calculate area and perimeter of a rectangle using a constructor and methods.",r`class Rectangle {
    int length, width;
    Rectangle(int l, int w) { length = l; width = w; }
    int area() { return length * width; }
    int perimeter() { return 2 * (length + width); }
}
public class RectDemo {
    public static void main(String[] args) {
        Rectangle r = new Rectangle(10, 5);
        System.out.println("Area      : " + r.area());
        System.out.println("Perimeter : " + r.perimeter());
    }
}`,`Area      : 50\nPerimeter : 30`),
P("Student Constructors","Demonstrate default and parameterized constructors.",r`class Student {
    int id; String name;
    Student() { id = 0; name = "Unknown"; }
    Student(int i, String n) { id = i; name = n; }
    void display() { System.out.println(id + " " + name); }
}
public class ConstructorDemo {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student(101, "Sathwika");
        s1.display();
        s2.display();
    }
}`,`0 Unknown\n101 Sathwika`),
P("Constructor Overloading","Demonstrate constructor overloading.",r`class Demo {
    Demo() { System.out.println("No-argument constructor"); }
    Demo(int a) { System.out.println("One-argument constructor: " + a); }
    Demo(int a, int b) { System.out.println("Two-argument constructor: " + a + ", " + b); }
}
public class OverloadCons {
    public static void main(String[] args) {
        new Demo();
        new Demo(10);
        new Demo(10, 20);
    }
}`,`No-argument constructor\nOne-argument constructor: 10\nTwo-argument constructor: 10, 20`),
P("Using this Keyword","Use this to refer to the current object's variables.",r`class Student {
    int id; String name;
    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    void display() { System.out.println("ID: " + id + ", Name: " + name); }
}
public class ThisDemo {
    public static void main(String[] args) {
        new Student(101, "Sathwika").display();
    }
}`,`ID: 101, Name: Sathwika`),
P("Constructor Chaining","Demonstrate constructor chaining using this().",r`class Demo {
    Demo() {
        this(10);
        System.out.println("Default constructor");
    }
    Demo(int a) {
        this(a, 20);
        System.out.println("Constructor with one parameter: " + a);
    }
    Demo(int a, int b) {
        System.out.println("Constructor with two parameters: " + a + ", " + b);
    }
}
public class Chaining {
    public static void main(String[] args) { new Demo(); }
}`,`Constructor with two parameters: 10, 20\nConstructor with one parameter: 10\nDefault constructor`),
P("Demonstrating Garbage Collection","Make objects eligible for garbage collection and request it with System.gc().",r`public class GCDemo {
    int id;
    GCDemo(int id) { this.id = id; }
    protected void finalize() {
        System.out.println("Object " + id + " is garbage collected");
    }
    public static void main(String[] args) throws InterruptedException {
        GCDemo o1 = new GCDemo(1);
        GCDemo o2 = new GCDemo(2);
        o1 = null;
        o2 = null;
        System.gc();
        Thread.sleep(500);
        System.out.println("End of main");
    }
}`,`Object 2 is garbage collected\nObject 1 is garbage collected\nEnd of main`),
P("Object Eligibility for Garbage Collection","Show different situations in which objects become eligible for GC.",r`public class Eligibility {
    static void create() {
        Eligibility local = new Eligibility();
        System.out.println("Object created inside method");
    }
    public static void main(String[] args) {
        Eligibility a = new Eligibility();
        a = null;
        System.out.println("1. Reference set to null");
        Eligibility b = new Eligibility();
        b = new Eligibility();
        System.out.println("2. Reference reassigned");
        create();
        System.out.println("3. Local object out of scope after method ends");
        new Eligibility();
        System.out.println("4. Anonymous object");
    }
}`,`1. Reference set to null\n2. Reference reassigned\nObject created inside method\n3. Local object out of scope after method ends\n4. Anonymous object`),
P("Method Overloading","Demonstrate method overloading.",r`class Add {
    int sum(int a, int b) { return a + b; }
    int sum(int a, int b, int c) { return a + b + c; }
    double sum(double a, double b) { return a + b; }
}
public class MethodOverload {
    public static void main(String[] args) {
        Add x = new Add();
        System.out.println(x.sum(10, 20));
        System.out.println(x.sum(10, 20, 30));
        System.out.println(x.sum(1.5, 2.5));
    }
}`,`30\n60\n4.0`),
P("Overloading Area Methods","Calculate area of circle, rectangle and square using overloaded methods.",r`class Area {
    double area(double r) { return 3.14 * r * r; }
    int area(int l, int b) { return l * b; }
    int area(int s, int s2, boolean sq) { return s * s2; }
}
public class AreaOverload {
    public static void main(String[] args) {
        Area a = new Area();
        System.out.println("Circle    : " + a.area(5.0));
        System.out.println("Rectangle : " + a.area(10, 4));
        System.out.println("Square    : " + a.area(6, 6, true));
    }
}`,`Circle    : 78.5\nRectangle : 40\nSquare    : 36`),
P("Passing Student Object","Pass a Student object to a method and display its details.",r`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}
public class PassObject {
    static void show(Student s) {
        System.out.println("ID   : " + s.id);
        System.out.println("Name : " + s.name);
    }
    public static void main(String[] args) {
        show(new Student(101, "Sathwika"));
    }
}`,`ID   : 101\nName : Sathwika`),
P("Comparing Employee Salaries","Compare salaries of two Employee objects and display the higher.",r`class Employee {
    String name; double salary;
    Employee(String n, double s) { name = n; salary = s; }
}
public class CompareSalary {
    static void compare(Employee a, Employee b) {
        Employee high = a.salary > b.salary ? a : b;
        System.out.println("Higher salary: " + high.name + " (" + high.salary + ")");
    }
    public static void main(String[] args) {
        compare(new Employee("Ravi", 45000), new Employee("Sneha", 52000));
    }
}`,`Higher salary: Sneha (52000.0)`),
P("Returning a Student Object","Create a Student object inside a method and return it.",r`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
}
public class ReturnObject {
    static Student create() { return new Student(102, "Anitha"); }
    public static void main(String[] args) {
        Student s = create();
        System.out.println(s.id + " " + s.name);
    }
}`,`102 Anitha`),
P("Returning a Bank Account Object","Pass a Bank Account to a method, update its balance and return it.",r`class Account {
    int accNo; double balance;
    Account(int n, double b) { accNo = n; balance = b; }
}
public class BankReturn {
    static Account deposit(Account a, double amt) {
        a.balance += amt;
        return a;
    }
    public static void main(String[] args) {
        Account acc = new Account(1001, 5000);
        Account updated = deposit(acc, 2500);
        System.out.println("Account : " + updated.accNo);
        System.out.println("Balance : " + updated.balance);
    }
}`,`Account : 1001\nBalance : 7500.0`),
P("Static Variable","Count the number of Student objects created using a static variable.",r`class Student {
    static int count = 0;
    Student() { count++; }
}
public class StaticVar {
    public static void main(String[] args) {
        new Student(); new Student(); new Student();
        System.out.println("Students created: " + Student.count);
    }
}`,`Students created: 3`),
P("Static Methods","Calculate square, cube and factorial using static methods.",r`public class StaticMethods {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
    static int factorial(int n) {
        int f = 1;
        for (int i = 2; i <= n; i++) f *= i;
        return f;
    }
    public static void main(String[] args) {
        System.out.println("Square of 5    : " + square(5));
        System.out.println("Cube of 3      : " + cube(3));
        System.out.println("Factorial of 5 : " + factorial(5));
    }
}`,`Square of 5    : 25\nCube of 3      : 27\nFactorial of 5 : 120`),
P("Final Keyword","Demonstrate final variables, final methods and final classes.",r`final class Base {
    final int MAX = 100;
    final void show() { System.out.println("Final method, MAX = " + MAX); }
}
public class FinalDemo {
    public static void main(String[] args) {
        Base b = new Base();
        b.show();
        System.out.println("Final variable: " + b.MAX);
        System.out.println("Final class cannot be extended");
    }
}`,`Final method, MAX = 100\nFinal variable: 100\nFinal class cannot be extended`),
P("Blank Final Variable","Blank final variable initialized through a constructor.",r`class Student {
    final int rollNo;
    Student(int r) { rollNo = r; }
}
public class BlankFinal {
    public static void main(String[] args) {
        Student s = new Student(26);
        System.out.println("Roll No: " + s.rollNo);
    }
}`,`Roll No: 26`),
P("College and Department — Nested Class","Static nested Department class inside College.",r`class College {
    String name = "SAHE";
    static class Department {
        void show() { System.out.println("Department: CSE (AI&ML)"); }
    }
}
public class NestedDemo {
    public static void main(String[] args) {
        College.Department d = new College.Department();
        d.show();
    }
}`,`Department: CSE (AI&ML)`),
P("Employee Address — Nested Class","Static nested Address class associated with Employee.",r`class Employee {
    String name = "Ravi";
    static class Address {
        String city = "Vijayawada";
        void show() { System.out.println("City: " + city); }
    }
}
public class EmpAddress {
    public static void main(String[] args) {
        Employee e = new Employee();
        Employee.Address a = new Employee.Address();
        System.out.println("Employee: " + e.name);
        a.show();
    }
}`,`Employee: Ravi\nCity: Vijayawada`),
P("Student Address — Inner Class","Non-static inner Address class inside StudentAddressInner.",r`class StudentAddressInner {
    String name = "Sathwika";
    class Address {
        String city = "Vijayawada";
        void show() { System.out.println(name + " lives in " + city); }
    }
}
public class InnerDemo {
    public static void main(String[] args) {
        StudentAddressInner s = new StudentAddressInner();
        StudentAddressInner.Address a = s.new Address();
        a.show();
    }
}`,`Sathwika lives in Vijayawada`),
P("Library Management — Inner Class","Inner Book class inside a LibraryBookManager class.",r`class LibraryBookManager {
    String library = "Central Library";
    class Book {
        String title = "Java: The Complete Reference";
        void show() { System.out.println(title + " is available in " + library); }
    }
}
public class LibraryDemo {
    public static void main(String[] args) {
        LibraryBookManager m = new LibraryBookManager();
        LibraryBookManager.Book b = m.new Book();
        b.show();
    }
}`,`Java: The Complete Reference is available in Central Library`)]},
{n:7,title:"Strings & Inheritance Basics",progs:[
P("String Constructors","Create String objects using literals, new String(), char arrays and byte arrays.",r`public class StringCons {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = new String("Java");
        char[] ch = {'W', 'o', 'r', 'l', 'd'};
        String s3 = new String(ch);
        byte[] by = {74, 65, 86, 65};
        String s4 = new String(by);
        String s5 = new String();
        System.out.println("Literal    : " + s1);
        System.out.println("new String : " + s2);
        System.out.println("Char array : " + s3);
        System.out.println("Byte array : " + s4);
        System.out.println("Empty      : '" + s5 + "'");
    }
}`,`Literal    : Hello\nnew String : Java\nChar array : World\nByte array : JAVA\nEmpty      : ''`),
P("StringBuffer Class","Mutable string operations: append, insert, replace, delete and reverse.",r`public class BufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" Java");
        System.out.println("append  : " + sb);
        sb.insert(5, ",");
        System.out.println("insert  : " + sb);
        sb.replace(0, 5, "Hi");
        System.out.println("replace : " + sb);
        sb.delete(2, 3);
        System.out.println("delete  : " + sb);
        sb.reverse();
        System.out.println("reverse : " + sb);
    }
}`,`append  : Hello Java\ninsert  : Hello, Java\nreplace : Hi, Java\ndelete  : Hi Java\nreverse : avaJ iH`),
P("StringTokenizer Class","Tokenize a sentence, display tokens, count them and repeat with a delimiter.",r`import java.util.StringTokenizer;
public class TokenDemo {
    public static void main(String[] args) {
        StringTokenizer st = new StringTokenizer("Java is a powerful language");
        System.out.println("Total tokens: " + st.countTokens());
        while (st.hasMoreTokens())
            System.out.println(st.nextToken());
        StringTokenizer st2 = new StringTokenizer("red,green,blue", ",");
        System.out.println("Tokens with delimiter ',' : " + st2.countTokens());
        while (st2.hasMoreTokens())
            System.out.println(st2.nextToken());
    }
}`,`Total tokens: 5\nJava\nis\na\npowerful\nlanguage\nTokens with delimiter ',' : 3\nred\ngreen\nblue`),
P("Basic Inheritance","Child class inherits methods from a parent class.",r`class Parent {
    void showParent() { System.out.println("This is the parent class"); }
}
class Child extends Parent {
    void showChild() { System.out.println("This is the child class"); }
}
public class BasicInherit {
    public static void main(String[] args) {
        Child c = new Child();
        c.showParent();
        c.showChild();
    }
}`,`This is the parent class\nThis is the child class`),
P("Using super Keyword","Use super to access parent class variables and methods.",r`class Parent {
    String name = "Parent";
    void show() { System.out.println("Parent method"); }
}
class Child extends Parent {
    String name = "Child";
    void display() {
        System.out.println("Child name  : " + name);
        System.out.println("Parent name : " + super.name);
        super.show();
    }
}
public class SuperDemo {
    public static void main(String[] args) { new Child().display(); }
}`,`Child name  : Child\nParent name : Parent\nParent method`)]},
{n:8,title:"Inheritance & Polymorphism",progs:[
P("Single Inheritance","Single inheritance using Person superclass and Student subclass.",r`class Person {
    String name; int age;
    void showPerson() { System.out.println("Name: " + name + ", Age: " + age); }
}
class Student extends Person {
    int rollNo;
    void showStudent() { showPerson(); System.out.println("Roll No: " + rollNo); }
}
public class Single {
    public static void main(String[] args) {
        Student s = new Student();
        s.name = "Sathwika"; s.age = 19; s.rollNo = 26;
        s.showStudent();
    }
}`,`Name: Sathwika, Age: 19\nRoll No: 26`),
P("Using super Keyword","Use super for accessing superclass variables and methods.",r`class Person {
    String name;
    Person(String n) { name = n; }
    void show() { System.out.println("Person: " + name); }
}
class Student extends Person {
    int roll;
    Student(String n, int r) { super(n); roll = r; }
    void display() { super.show(); System.out.println("Roll: " + roll); }
}
public class SuperUse {
    public static void main(String[] args) { new Student("Sathwika", 26).display(); }
}`,`Person: Sathwika\nRoll: 26`),
P("Multilevel Inheritance","Multilevel inheritance using Person, Employee and Manager.",r`class Person {
    void showPerson() { System.out.println("Person: Ravi"); }
}
class Employee extends Person {
    void showEmployee() { System.out.println("Employee ID: 501"); }
}
class Manager extends Employee {
    void showManager() { System.out.println("Manager of: Sales Dept"); }
}
public class Multilevel {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.showPerson(); m.showEmployee(); m.showManager();
    }
}`,`Person: Ravi\nEmployee ID: 501\nManager of: Sales Dept`),
P("Method Overriding","Method overriding using Animal, Dog and Cat.",r`class Animal { void sound() { System.out.println("Animal makes a sound"); } }
class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }
class Cat extends Animal { void sound() { System.out.println("Cat meows"); } }
public class Overriding {
    public static void main(String[] args) {
        new Animal().sound();
        new Dog().sound();
        new Cat().sound();
    }
}`,`Animal makes a sound\nDog barks\nCat meows`),
P("Dynamic Method Dispatch","Dynamic method dispatch with Shape, Circle, Rectangle and Triangle.",r`class Shape { void draw() { System.out.println("Drawing a shape"); } }
class Circle extends Shape { void draw() { System.out.println("Drawing a Circle"); } }
class Rectangle extends Shape { void draw() { System.out.println("Drawing a Rectangle"); } }
class Triangle extends Shape { void draw() { System.out.println("Drawing a Triangle"); } }
public class Dispatch {
    public static void main(String[] args) {
        Shape s;
        s = new Circle(); s.draw();
        s = new Rectangle(); s.draw();
        s = new Triangle(); s.draw();
    }
}`,`Drawing a Circle\nDrawing a Rectangle\nDrawing a Triangle`),
P("super with Method Overriding","Use super.display() to call the superclass implementation first.",r`class Person {
    void display() { System.out.println("Name: Sathwika"); }
}
class Student extends Person {
    void display() {
        super.display();
        System.out.println("Course: AI&ML");
    }
}
public class SuperOverride {
    public static void main(String[] args) { new Student().display(); }
}`,`Name: Sathwika\nCourse: AI&ML`),
P("Multilevel Inheritance for Salary Calculation","Total salary using Employee, Developer and SeniorDeveloper.",r`class Employee { double basic = 30000; }
class Developer extends Employee { double bonus = 5000; }
class SeniorDeveloper extends Developer {
    double allowance = 8000;
    double total() { return basic + bonus + allowance; }
}
public class SalaryCalc {
    public static void main(String[] args) {
        SeniorDeveloper d = new SeniorDeveloper();
        System.out.println("Basic     : " + d.basic);
        System.out.println("Bonus     : " + d.bonus);
        System.out.println("Allowance : " + d.allowance);
        System.out.println("Total Salary : " + d.total());
    }
}`,`Basic     : 30000.0\nBonus     : 5000.0\nAllowance : 8000.0\nTotal Salary : 43000.0`),
P("Dynamic Method Dispatch for Bank Accounts","Dispatch using BankAccount, SavingsAccount and CurrentAccount.",r`class BankAccount { void interest() { System.out.println("Generic account"); } }
class SavingsAccount extends BankAccount { void interest() { System.out.println("Savings interest: 4%"); } }
class CurrentAccount extends BankAccount { void interest() { System.out.println("Current account interest: 0%"); } }
public class BankDispatch {
    public static void main(String[] args) {
        BankAccount b;
        b = new SavingsAccount(); b.interest();
        b = new CurrentAccount(); b.interest();
    }
}`,`Savings interest: 4%\nCurrent account interest: 0%`),
P("Constructor Execution in Multilevel Inheritance","Order of constructor execution in multilevel inheritance.",r`class A { A() { System.out.println("Constructor of A"); } }
class B extends A { B() { System.out.println("Constructor of B"); } }
class C extends B { C() { System.out.println("Constructor of C"); } }
public class ConsOrder {
    public static void main(String[] args) { new C(); }
}`,`Constructor of A\nConstructor of B\nConstructor of C`),
P("Banking Application Using Inheritance","A simple banking application using inheritance.",r`class Account {
    double balance;
    Account(double b) { balance = b; }
    void deposit(double amt) { balance += amt; System.out.println("Deposited: " + amt); }
}
class SavingsAccount extends Account {
    SavingsAccount(double b) { super(b); }
    void withdraw(double amt) {
        if (amt <= balance) { balance -= amt; System.out.println("Withdrawn: " + amt); }
        else System.out.println("Insufficient balance");
    }
}
public class BankApp {
    public static void main(String[] args) {
        SavingsAccount s = new SavingsAccount(5000);
        s.deposit(2000);
        s.withdraw(1500);
        s.withdraw(9000);
        System.out.println("Final Balance: " + s.balance);
    }
}`,`Deposited: 2000.0\nWithdrawn: 1500.0\nInsufficient balance\nFinal Balance: 5500.0`)]},
{n:9,title:"Packages & Interfaces",progs:[
P("Creating and Using a User-Defined Package","Create a package mypackage with a Student class and access it from a program outside the package.",r`// File: mypackage/Student.java
package mypackage;
public class Student {
    public void display() {
        System.out.println("ID   : 101");
        System.out.println("Name : Sathwika");
    }
}

// File: TestPackage.java
import mypackage.Student;
public class TestPackage {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}

// Compile & Run
// javac -d . mypackage/Student.java
// javac TestPackage.java
// java TestPackage`,`ID   : 101\nName : Sathwika`),
P("Importing Packages","Import Student and Faculty from package college using a specific import and a wildcard import.",r`// File: college/Student.java
package college;
public class Student {
    public void show() { System.out.println("Student class from package college"); }
}

// File: college/Faculty.java
package college;
public class Faculty {
    public void show() { System.out.println("Faculty class from package college"); }
}

// File: ImportDemo.java
import college.Student;      // specific import
import college.*;            // wildcard import
public class ImportDemo {
    public static void main(String[] args) {
        Student s = new Student();
        Faculty f = new Faculty();
        s.show();
        f.show();
        college.Student s2 = new college.Student();   // fully qualified name
        s2.show();
    }
}`,`Student class from package college\nFaculty class from package college\nStudent class from package college`),
P("Packages and Member Access","Show accessibility of public, private, protected and default members from the same class, same package and a different package.",r`// File: pack1/A.java
package pack1;
public class A {
    public int pub = 1;
    private int pri = 2;
    protected int pro = 3;
    int def = 4;
    public void show() {
        System.out.println("Same class     : " + pub + " " + pri + " " + pro + " " + def);
    }
}

// File: pack1/B.java  (same package)
package pack1;
public class B {
    public static void main(String[] args) {
        A a = new A();
        a.show();
        System.out.println("Same package   : " + a.pub + " " + a.pro + " " + a.def);
        // a.pri -> not accessible (private)
    }
}

// File: pack2/C.java  (different package)
package pack2;
import pack1.A;
public class C extends A {
    public static void main(String[] args) {
        A a = new A();
        C c = new C();
        System.out.println("Other package  : " + a.pub + " " + c.pro);
        // a.pri and a.def -> not accessible
    }
}`,`// Running pack1.B
Same class     : 1 2 3 4
Same package   : 1 3 4

// Running pack2.C
Other package  : 1 3`),
P("Demonstrating CLASSPATH","Show how Java uses CLASSPATH to locate the user-defined package utilities containing a Calculator class.",r`// File: C:\javalib\utilities\Calculator.java
package utilities;
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int multiply(int a, int b) { return a * b; }
}

// File: C:\project\UseCalc.java
import utilities.Calculator;
public class UseCalc {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println("Sum     : " + c.add(20, 10));
        System.out.println("Product : " + c.multiply(20, 10));
    }
}

// Commands
// cd C:\javalib
// javac utilities\Calculator.java
// cd C:\project
// set CLASSPATH=C:\javalib;.
// javac UseCalc.java
// java UseCalc`,`Sum     : 30\nProduct : 200`),
P("Package Containing Multiple Classes","Create package bank with Account, Customer and Transaction classes used together from a main class.",r`// File: bank/Account.java
package bank;
public class Account {
    public int accNo = 1001;
    public double balance = 5000;
}

// File: bank/Customer.java
package bank;
public class Customer {
    public String name = "Sathwika";
}

// File: bank/Transaction.java
package bank;
public class Transaction {
    public void deposit(Account a, double amt) {
        a.balance += amt;
        System.out.println("Deposited " + amt);
    }
}

// File: BankMain.java
import bank.*;
public class BankMain {
    public static void main(String[] args) {
        Account a = new Account();
        Customer c = new Customer();
        Transaction t = new Transaction();
        t.deposit(a, 2500);
        System.out.println("Customer : " + c.name);
        System.out.println("Account  : " + a.accNo);
        System.out.println("Balance  : " + a.balance);
    }
}`,`Deposited 2500.0\nCustomer : Sathwika\nAccount  : 1001\nBalance  : 7500.0`),

P("Defining and Implementing an Interface","Interface Shape with area(), implemented by Circle and Rectangle.",r`interface Shape { double area(); }
class Circle implements Shape {
    double r = 7;
    public double area() { return 3.14 * r * r; }
}
class Rectangle implements Shape {
    double l = 10, b = 5;
    public double area() { return l * b; }
}
public class ShapeDemo {
    public static void main(String[] args) {
        System.out.println("Circle area    : " + new Circle().area());
        System.out.println("Rectangle area : " + new Rectangle().area());
    }
}`,`Circle area    : 153.86\nRectangle area : 50.0`),
P("Implementing Multiple Interfaces","A class implementing Printable and Showable.",r`interface Printable { void print(); }
interface Showable { void show(); }
class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing..."); }
    public void show() { System.out.println("Showing..."); }
}
public class MultiInterface {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`,`Printing...\nShowing...`),
P("Interface-Based Polymorphism","Vehicle interface reference assigned Car and Bike objects.",r`interface Vehicle { void start(); }
class Car implements Vehicle { public void start() { System.out.println("Car starts with a key"); } }
class Bike implements Vehicle { public void start() { System.out.println("Bike starts with a kick"); } }
public class VehicleDemo {
    public static void main(String[] args) {
        Vehicle v;
        v = new Car(); v.start();
        v = new Bike(); v.start();
    }
}`,`Car starts with a key\nBike starts with a kick`),
P("Variables in Interfaces","Constants interface with MAX_MARKS and PI.",r`interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14;
}
public class ConstDemo implements Constants {
    public static void main(String[] args) {
        System.out.println("Inside class  : " + MAX_MARKS + ", " + PI);
        System.out.println("Using interface: " + Constants.MAX_MARKS + ", " + Constants.PI);
    }
}`,`Inside class  : 100, 3.14\nUsing interface: 100, 3.14`),
P("Nested Interfaces","Nested interface Department inside outer class University.",r`class University {
    interface Department { void show(); }
}
public class NestedInterface implements University.Department {
    public void show() { System.out.println("Department of CSE (AI&ML)"); }
    public static void main(String[] args) { new NestedInterface().show(); }
}`,`Department of CSE (AI&ML)`),
P("Interface Inheritance","Interface Dog extends Animal; both implemented in Labrador.",r`interface Animal { void eat(); }
interface Dog extends Animal { void bark(); }
class Labrador implements Dog {
    public void eat() { System.out.println("Labrador eats"); }
    public void bark() { System.out.println("Labrador barks"); }
}
public class InterfaceInherit {
    public static void main(String[] args) {
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`,`Labrador eats\nLabrador barks`),
P("Real-World Application Using Interfaces","Online payment system where different payment methods implement a common Payment interface.",r`interface Payment {
    void pay(double amount);
}
class UpiPayment implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using UPI"); }
}
class CardPayment implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using Credit Card"); }
}
class NetBankingPayment implements Payment {
    public void pay(double amount) { System.out.println("Paid " + amount + " using Net Banking"); }
}
public class OnlineShop {
    public static void main(String[] args) {
        Payment[] methods = { new UpiPayment(), new CardPayment(), new NetBankingPayment() };
        for (Payment p : methods)
            p.pay(1499.0);
    }
}`,`Paid 1499.0 using UPI\nPaid 1499.0 using Credit Card\nPaid 1499.0 using Net Banking`)]},
{n:10,title:"Exception Handling & Byte Streams",progs:[
P("try-catch: Division by Zero","Handle division by zero using try-catch.",r`public class DivideByZero {
    public static void main(String[] args) {
        int a = 10, b = 0;
        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println("Program continues normally");
    }
}`,`Error: / by zero\nProgram continues normally`),
P("ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException","Demonstrate three common runtime exceptions.",r`public class ThreeExceptions {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException: " + e.getMessage());
        }
        try {
            int[] arr = new int[3];
            arr[5] = 10;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage());
        }
        try {
            String s = null;
            System.out.println(s.length());
        } catch (NullPointerException e) {
            System.out.println("NullPointerException: the string is null");
        }
    }
}`,`ArithmeticException: / by zero\nArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\nNullPointerException: the string is null`),
P("Uncaught Exception and Stack Trace","Show the JVM's default exception message and stack trace for an uncaught exception.",r`public class UncaughtDemo {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        System.out.println("Before exception");
        System.out.println(a[5]);
        System.out.println("After exception");
    }
}`,`Before exception\nException in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\n\tat UncaughtDemo.main(UncaughtDemo.java:5)`),
P("Multiple Catch Clauses","Handle multiple exceptions using multiple catch blocks.",r`public class MultiCatch {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            try {
                if (i == 1) System.out.println(10 / 0);
                else if (i == 2) { int[] a = new int[2]; a[3] = 5; }
                else Integer.parseInt("abc");
            } catch (ArithmeticException e) {
                System.out.println("Caught ArithmeticException");
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Caught ArrayIndexOutOfBoundsException");
            } catch (Exception e) {
                System.out.println("Caught general Exception: " + e.getMessage());
            }
        }
    }
}`,`Caught ArithmeticException\nCaught ArrayIndexOutOfBoundsException\nCaught general Exception: For input string: "abc"`),
P("throw Statement","Demonstrate the throw statement.",r`public class ThrowDemo {
    static void checkAge(int age) {
        if (age < 18)
            throw new ArithmeticException("Not eligible to vote");
        System.out.println("Eligible to vote");
    }
    public static void main(String[] args) {
        try {
            checkAge(20);
            checkAge(15);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,`Eligible to vote\nCaught: Not eligible to vote`),
P("throws Keyword and Exception Propagation","Demonstrate throws and how an exception propagates up the call stack.",r`public class ThrowsDemo {
    static void level2() throws Exception {
        System.out.println("Inside level2");
        throw new Exception("Exception from level2");
    }
    static void level1() throws Exception {
        System.out.println("Inside level1");
        level2();
    }
    public static void main(String[] args) {
        try {
            level1();
        } catch (Exception e) {
            System.out.println("Caught in main: " + e.getMessage());
        }
    }
}`,`Inside level1\nInside level2\nCaught in main: Exception from level2`),
P("finally Block","Demonstrate that the finally block always executes.",r`public class FinallyDemo {
    static void test(int b) {
        try {
            System.out.println("Result: " + (10 / b));
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Finally block executed");
        }
    }
    public static void main(String[] args) {
        test(2);
        test(0);
    }
}`,`Result: 5\nFinally block executed\nCannot divide by zero\nFinally block executed`),
P("User-Defined Exception","Create a user-defined exception by extending Exception.",r`class NegativeNumberException extends Exception {
    NegativeNumberException(String message) { super(message); }
}
public class CustomException {
    static void check(int n) throws NegativeNumberException {
        if (n < 0)
            throw new NegativeNumberException("Negative number not allowed: " + n);
        System.out.println("Valid number: " + n);
    }
    public static void main(String[] args) {
        try {
            check(10);
            check(-5);
        } catch (NegativeNumberException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,`Valid number: 10\nCaught: Negative number not allowed: -5`),
P("Validating Student Marks","Throw a custom exception when marks are outside the range 0 to 100.",r`import java.util.Scanner;
class InvalidMarksException extends Exception {
    InvalidMarksException(String message) { super(message); }
}
public class MarksValidation {
    static void validate(int marks) throws InvalidMarksException {
        if (marks < 0 || marks > 100)
            throw new InvalidMarksException("Marks must be between 0 and 100");
        System.out.println("Valid marks: " + marks);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter marks: ");
        int marks = sc.nextInt();
        try {
            validate(marks);
        } catch (InvalidMarksException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,`Enter marks: 105\nCaught: Marks must be between 0 and 100`),
P("Combined Exception Handling Application","One application using try, multiple catch, throw, throws and finally (ATM withdrawal).",r`class InsufficientFundsException extends Exception {
    InsufficientFundsException(String message) { super(message); }
}
public class ATMApp {
    static int balance = 5000;
    static void withdraw(int amount) throws InsufficientFundsException {
        if (amount > balance)
            throw new InsufficientFundsException("Insufficient balance. Available: " + balance);
        balance -= amount;
        System.out.println("Withdrawn: " + amount);
    }
    public static void main(String[] args) {
        String[] requests = {"2000", "abc", "9000"};
        for (String req : requests) {
            try {
                int amount = Integer.parseInt(req);
                withdraw(amount);
            } catch (NumberFormatException e) {
                System.out.println("Invalid amount: " + req);
            } catch (InsufficientFundsException e) {
                System.out.println(e.getMessage());
            } finally {
                System.out.println("Transaction completed");
            }
        }
    }
}`,`Withdrawn: 2000\nTransaction completed\nInvalid amount: abc\nTransaction completed\nInsufficient balance. Available: 3000\nTransaction completed`),
Q("InputStream and OutputStream","Demonstrate InputStream (System.in) and OutputStream (System.out).",r`import java.io.*;
public class StreamDemo {
    public static void main(String[] args) throws IOException {
        InputStream in = System.in;
        OutputStream out = System.out;
        System.out.print("Enter a character: ");
        int ch = in.read();
        out.write(ch);
        out.write('\n');
        out.flush();
    }
}`,`Enter a character: A\nA`,"Save as StreamDemo.java. Run: javac StreamDemo.java then java StreamDemo. No input file needed."),
Q("Reading a File Byte by Byte","Read a file byte by byte using FileInputStream and display its contents.",r`import java.io.*;
public class ReadBytes {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("input.txt");
            int ch;
            while ((ch = fis.read()) != -1)
                System.out.print((char) ch);
            fis.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Hello Java`,"Save as ReadBytes.java. Create input.txt in the same folder as the program with the text: Hello Java"),
Q("Writing to a File with FileOutputStream","Write data to a file using FileOutputStream and verify its contents.",r`import java.io.*;
public class WriteBytes {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream("output.txt");
            String data = "Welcome to Java I/O";
            fos.write(data.getBytes());
            fos.close();
            System.out.println("Data written to output.txt");
            FileInputStream fis = new FileInputStream("output.txt");
            int ch;
            System.out.print("File contents: ");
            while ((ch = fis.read()) != -1)
                System.out.print((char) ch);
            fis.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Data written to output.txt\nFile contents: Welcome to Java I/O`,"Save as WriteBytes.java. output.txt is created automatically in the same folder as the program."),
Q("Copying a File with Byte Streams","Copy one file to another using FileInputStream and FileOutputStream.",r`import java.io.*;
public class CopyFile {
    public static void main(String[] args) {
        try {
            FileInputStream fis = new FileInputStream("source.txt");
            FileOutputStream fos = new FileOutputStream("copy.txt");
            int ch, count = 0;
            while ((ch = fis.read()) != -1) {
                fos.write(ch);
                count++;
            }
            fis.close();
            fos.close();
            System.out.println("File copied successfully");
            System.out.println("Bytes copied: " + count);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`File copied successfully\nBytes copied: 17`,"Save as CopyFile.java. Create source.txt in the same folder with the text: Java Byte Streams (17 characters, no extra line). copy.txt is created automatically."),
Q("Copying an Image with Exception Handling","Copy an image using byte streams and handle FileNotFoundException and IOException with try-catch-finally.",r`import java.io.*;
public class CopyImage {
    public static void main(String[] args) {
        FileInputStream fis = null;
        FileOutputStream fos = null;
        try {
            fis = new FileInputStream("photo.jpg");
            fos = new FileOutputStream("photo_copy.jpg");
            int ch;
            while ((ch = fis.read()) != -1)
                fos.write(ch);
            System.out.println("Image copied successfully");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try {
                if (fis != null) fis.close();
                if (fos != null) fos.close();
                System.out.println("Streams closed");
            } catch (IOException e) {
                System.out.println("Error closing streams");
            }
        }
    }
}`,`Image copied successfully\nStreams closed`,"Save as CopyImage.java. Place any image named photo.jpg in the same folder as the program. photo_copy.jpg is created automatically. If photo.jpg is missing, the program prints: File not found: photo.jpg (The system cannot find the file specified)")]},
{n:11,title:"Character Streams & Multithreading",progs:[
Q("Reader and Writer from the Keyboard","Read characters from the keyboard using Reader and display them on the console using Writer.",r`import java.io.*;
public class ReaderWriterDemo {
    public static void main(String[] args) throws IOException {
        Reader reader = new InputStreamReader(System.in);
        Writer writer = new OutputStreamWriter(System.out);
        System.out.println("Enter text (type # to stop):");
        int ch;
        while ((ch = reader.read()) != -1 && ch != '#')
            writer.write(ch);
        writer.flush();
    }
}`,`Enter text (type # to stop):\nHello Java#\nHello Java`,"Save as ReaderWriterDemo.java. Run: javac ReaderWriterDemo.java then java ReaderWriterDemo"),
Q("Reading a Text File with FileReader","Read the contents of a text file using FileReader and display them on the console.",r`import java.io.*;
public class ReadFile {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("data.txt");
            int ch;
            while ((ch = fr.read()) != -1)
                System.out.print((char) ch);
            fr.close();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Java Programming Lab\nCharacter Streams`,"Save as ReadFile.java. Required input file: data.txt (same folder) containing two lines: Java Programming Lab and Character Streams"),
Q("Writing to a File with FileWriter","Write text into a file using FileWriter.",r`import java.io.*;
import java.util.Scanner;
public class WriteFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter text to write: ");
        String text = sc.nextLine();
        try {
            FileWriter fw = new FileWriter("output.txt");
            fw.write(text);
            fw.close();
            System.out.println("Data written successfully to output.txt");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Enter text to write: Java is simple\nData written successfully to output.txt`,"Save as WriteFile.java. output.txt is created automatically in the same folder."),
Q("Copying a Text File","Copy the contents of one text file into another using FileReader and FileWriter.",r`import java.io.*;
import java.util.Scanner;
public class CopyText {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter source file name: ");
        String src = sc.next();
        System.out.print("Enter destination file name: ");
        String dest = sc.next();
        try {
            FileReader fr = new FileReader(src);
            FileWriter fw = new FileWriter(dest);
            int ch;
            while ((ch = fr.read()) != -1)
                fw.write(ch);
            fr.close();
            fw.close();
            System.out.println("File copied successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Enter source file name: source.txt\nEnter destination file name: target.txt\nFile copied successfully`,"Save as CopyText.java. Required input file: source.txt (any text, same folder). target.txt is created automatically."),
Q("Counting Characters, Words and Lines","Count the number of characters, words and lines in a text file using character streams.",r`import java.io.*;
import java.util.Scanner;
public class CountFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter file name: ");
        String name = sc.next();
        int chars = 0, words = 0, lines = 0;
        boolean inWord = false;
        int last = 0;
        try {
            FileReader fr = new FileReader(name);
            int ch;
            while ((ch = fr.read()) != -1) {
                if (ch != '\n' && ch != '\r') chars++;
                if (ch == '\n') lines++;
                if (ch == ' ' || ch == '\n' || ch == '\r' || ch == '\t')
                    inWord = false;
                else if (!inWord) {
                    inWord = true;
                    words++;
                }
                last = ch;
            }
            if (last != 0 && last != '\n') lines++;
            fr.close();
            System.out.println("Characters : " + chars);
            System.out.println("Words      : " + words);
            System.out.println("Lines      : " + lines);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,`Enter file name: sample.txt\nCharacters : 28\nWords      : 7\nLines      : 3`,"Save as CountFile.java. Required input file: sample.txt with 3 lines: Java is easy / Thread is fun / Lab (characters are counted without line breaks)."),
Q("Main Thread Details","Display the name, priority and state of the main thread.",r`public class MainThreadDemo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        System.out.println("Thread Name : " + t.getName());
        System.out.println("Priority    : " + t.getPriority());
        System.out.println("State       : " + t.getState());
    }
}`,`Thread Name : main\nPriority    : 5\nState       : RUNNABLE`,"Save as MainThreadDemo.java. Run: javac MainThreadDemo.java then java MainThreadDemo"),
Q("Creating a Thread by Extending Thread","Create a thread by extending the Thread class.",r`class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            try { Thread.sleep(500); } catch (InterruptedException e) { }
            System.out.println("MyThread running: count = " + i);
        }
    }
}
public class ExtendThread {
    public static void main(String[] args) {
        System.out.println("Main: creating thread");
        MyThread t = new MyThread();
        t.start();
        System.out.println("Main: thread started");
    }
}`,`Main: creating thread\nMain: thread started\nMyThread running: count = 1\nMyThread running: count = 2\nMyThread running: count = 3`,"Save as ExtendThread.java. The two Main lines normally appear first because the child thread sleeps before printing."),
Q("Creating a Thread by Implementing Runnable","Create a thread by implementing the Runnable interface.",r`class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            try { Thread.sleep(500); } catch (InterruptedException e) { }
            System.out.println("Runnable thread running: count = " + i);
        }
    }
}
public class RunnableDemo {
    public static void main(String[] args) {
        System.out.println("Main: creating thread using Runnable");
        MyRunnable r = new MyRunnable();
        Thread t = new Thread(r);
        t.start();
        System.out.println("Main: thread started");
    }
}`,`Main: creating thread using Runnable\nMain: thread started\nRunnable thread running: count = 1\nRunnable thread running: count = 2\nRunnable thread running: count = 3`,"Save as RunnableDemo.java. The thread is created by implementing Runnable and passing the object to a Thread."),
Q("Multiple Threads Running Concurrently","Create multiple threads and demonstrate their concurrent execution.",r`class Worker implements Runnable {
    public void run() {
        String name = Thread.currentThread().getName();
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + " : step " + i);
            try { Thread.sleep(500); } catch (InterruptedException e) { }
        }
    }
}
public class MultiThread {
    public static void main(String[] args) {
        Thread t1 = new Thread(new Worker(), "Thread-A");
        Thread t2 = new Thread(new Worker(), "Thread-B");
        Thread t3 = new Thread(new Worker(), "Thread-C");
        t1.start();
        t2.start();
        t3.start();
    }
}`,`Thread-A : step 1\nThread-B : step 1\nThread-C : step 1\nThread-A : step 2\nThread-C : step 2\nThread-B : step 2\nThread-A : step 3\nThread-B : step 3\nThread-C : step 3`,"Save as MultiThread.java. Thread execution order may vary on every run, because the threads run concurrently."),
Q("isAlive() Method","Use isAlive() to check whether a thread is running.",r`class Task extends Thread {
    public void run() {
        try { Thread.sleep(1000); } catch (InterruptedException e) { }
        System.out.println("Child thread finished work");
    }
}
public class IsAliveDemo {
    public static void main(String[] args) throws InterruptedException {
        Task t = new Task();
        System.out.println("Before start : " + t.isAlive());
        t.start();
        System.out.println("After start  : " + t.isAlive());
        t.join();
        System.out.println("After finish : " + t.isAlive());
    }
}`,`Before start : false\nAfter start  : true\nChild thread finished work\nAfter finish : false`,"Save as IsAliveDemo.java. isAlive() is false before start(), true while the thread runs, and false after it finishes."),
Q("join() Method","Use join() to make one thread wait for another thread to complete.",r`class Counter extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            try { Thread.sleep(500); } catch (InterruptedException e) { }
            System.out.println("Child thread: count = " + i);
        }
    }
}
public class JoinDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();
        c.start();
        System.out.println("Main: waiting for child thread to finish...");
        c.join();
        System.out.println("Main: child thread completed, main resumes");
    }
}`,`Main: waiting for child thread to finish...\nChild thread: count = 1\nChild thread: count = 2\nChild thread: count = 3\nMain: child thread completed, main resumes`,"Save as JoinDemo.java. Without join(), the last Main line would appear before the child finishes."),
Q("isAlive() and join() Together","Create multiple threads and use isAlive() and join() to control the execution order.",r`class Job extends Thread {
    Job(String name) { super(name); }
    public void run() {
        try { Thread.sleep(500); } catch (InterruptedException e) { }
        System.out.println(getName() + " finished");
    }
}
public class OrderDemo {
    public static void main(String[] args) throws InterruptedException {
        Job t1 = new Job("Thread-1");
        Job t2 = new Job("Thread-2");
        Job t3 = new Job("Thread-3");
        t1.start();
        System.out.println("Thread-1 alive: " + t1.isAlive());
        t1.join();
        t2.start();
        System.out.println("Thread-2 alive: " + t2.isAlive());
        t2.join();
        t3.start();
        System.out.println("Thread-3 alive: " + t3.isAlive());
        t3.join();
        System.out.println("After join -> " + t1.isAlive() + " " + t2.isAlive() + " " + t3.isAlive());
        System.out.println("All threads completed in order 1, 2, 3");
    }
}`,`Thread-1 alive: true\nThread-1 finished\nThread-2 alive: true\nThread-2 finished\nThread-3 alive: true\nThread-3 finished\nAfter join -> false false false\nAll threads completed in order 1, 2, 3`,"Save as OrderDemo.java. join() after each start() forces the order Thread-1, Thread-2, Thread-3.")]}

];
const $=s=>document.querySelector(s),app=$('#app');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
$('#nav').innerHTML='<a href="#/">Home</a>'+WEEKS.map(w=>`<a href="#/w/${w.n}">W${w.n}</a>`).join('');
function home(){const tp=WEEKS.reduce((x,w)=>x+w.progs.length,0);app.innerHTML=`<section class="hero"><img class="avatar" src="assets/profile.png" alt="K.Sathwika" onerror="this.outerHTML='<div class=avatar>👩‍💻</div>'">
<div><span class="tag">Java Programming Record</span><h1>K.Sathwika</h1><p>Step into my Java journey — every week, every program, every output.</p>
<div class="info"><div><b>Roll No</b>26EU02908</div><div><b>Year</b>II Year</div><div><b>Branch</b>AI&amp;ML</div><div><b>Section</b>B</div><div><b>Subject</b>Java Programming</div></div></div></section>
<div class="stats"><div><b>${tp}</b>Programs</div><div><b>${WEEKS.length}</b>Weeks</div><div><b>${tp+1}</b>Total Tasks</div></div><h2>Weekly Records</h2><div class="grid">${WEEKS.map(w=>`<a class="card" href="#/w/${w.n}"><small>Week ${w.n}</small><h3>${w.title}</h3><small>${w.progs.length?w.progs.length+' program(s)':w.note?'No task':'Table'}</small></a>`).join('')}</div>`}
function week(n){const w=WEEKS.find(x=>x.n==n);let h=`<div class="crumb"><a href="#/">Home</a> / Week ${n}</div><h2>Week ${n}: ${w.title}</h2>`;
if(w.note)h+=`<div class="q">${w.note}</div>`;
if(w.table)h+=`<table><tr>${w.table[0].map(c=>`<th>${c}</th>`).join('')}</tr>${w.table.slice(1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
h+=`<div class="grid">${w.progs.map((p,i)=>`<a class="card" href="#/w/${n}/${i}"><small>Program ${i+1}</small><h3>${p.t}</h3></a>`).join('')}</div>`;app.innerHTML=h}
function prog(n,i){const w=WEEKS.find(x=>x.n==n),p=w.progs[i];let h=`<div class="crumb"><a href="#/">Home</a> / <a href="#/w/${n}">Week ${n}</a> / Program ${+i+1}</div><h2>${p.t}</h2><div class="q"><b>Aim:</b> ${p.q}</div>`;
if(p.steps)h+=`<ol>${p.steps.map(s=>`<li>${s}</li>`).join('')}</ol>`;
if(p.c)h+=`<div class="box"><h4>Program</h4><button class="copy">Copy</button><pre>${esc(p.c)}</pre></div>`;
if(p.o)h+=`<div class="box"><h4>Output</h4><pre class="out">${esc(p.o)}</pre></div>`;if(p.nt)h+=`<div class="q"><b>Note:</b> ${p.nt}</div>`;
h+=`<div class="pn">${i>0?`<a href="#/w/${n}/${i-1}">← Prev</a>`:'<span></span>'}${i<w.progs.length-1?`<a href="#/w/${n}/${+i+1}">Next →</a>`:`<a href="#/w/${n}">Back to Week ${n}</a>`}</div>`;
app.innerHTML=h;const b=$('.copy');if(b)b.onclick=()=>{navigator.clipboard.writeText(p.c);b.textContent='Copied!'}}
function route(){const [,t,n,i]=location.hash.split('/');window.scrollTo(0,0);t==='w'?(i!==undefined?prog(n,i):week(n)):home()}
addEventListener('hashchange',route);route();
