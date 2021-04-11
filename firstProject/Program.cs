using System;

namespace firstProject
{
    class Program
    {
        static void Greet()
        {
            Console.WriteLine("Good Morning");
        }

        static void Main(string[] args)
        {
            //this is a single line cpmment - ctrl + k + c
            /*
             this is a multiline comment
             */

            //int harry = 34; //integer Variable
            /*
             Data Type in c#:
             Integer - int harry; --> 4 byte 
             long long harry; --> 8 byte
             double double harry; --> 8 byte
             floating point number - float that; --> 4 byte
             character - char a = 'A'; --> 2 byte
             boolean - bool isGreat = true; 1 bit
             String - string input = "harry"; --> 2 byte per character
             */



            // How to take input?
            //  string inp = Console.ReadLine();
            //Console.WriteLine(inp);

            //how to output
            //Console.WriteLine("Hello World");
            ////writeline add line after output, write doesnot.
            //Console.Write("Hello HArry.  your number is " + harry);
            //Console.WriteLine("I love c#");



            //int a = 34;
            //float b = 34.4F;
            //double c = 34.4D;
            //bool isGreat = true;
            //char d = 'r';
            //string e = "this is a string";

            //Console.WriteLine(a);
            //Console.WriteLine(b);
            //Console.WriteLine(c);
            //Console.WriteLine(isGreat);
            //Console.WriteLine(e);

            //TypeCasting - convert one data type into another


            //Thmere are two type of type casting:
            //1.implicit casting
            //Char to int to long to float to double
            //char x = 'a';
            //int y = x;


            //2. Explicit Casting
            //int x = (int)3.5;
            // double y = (double)3.5;


            //int x = 3;
            //double y = 4;
            //float z = 'y';
            //float varr = Convert.ToInt32(3.55);
            //Convert.ToDouble
            //Convert.ToString
            //string sx = "Random string";


            // taking user input

            //Console.WriteLine("Enter your name");
            //string name = Console.ReadLine();
            //Console.WriteLine("Hey hello " + name);

            //Console.WriteLine("How many candies do you want?");
            //string can = Console.ReadLine();
            //Console.WriteLine("You will get 4 more candies: " + (Convert.ToInt32(can) + 4));


            //operators in c#
            /*
             1. Arithmetic operator + - * /
             2. Assignment operator =
             3. Logical operator && || !
             4. Comparison operator > < >= <= ==
             */

            ////math class
            //int a = Math.Max(34, 345);
            //double a = Math.Min(34, 345);
            //int a = Math.Abs(-39);


            //string hello = "hello world this is harry";
            //Console.WriteLine(hello.Length);
            //Console.WriteLine(hello.ToUpper());
            //Console.WriteLine(hello + "You are nice");
            //Console.WriteLine(string.Concat(hello, "you are nice"));


            //string name = Console.ReadLine();
            //string candies = Console.ReadLine();
            //Console.WriteLine($"Your name is {name}. You will get {candies} candies.");

            //string hello = "hello world this \" is harry";
            //Console.WriteLine(hello[1]);
            //Console.WriteLine(hello.IndexOf("is"));
            //Console.WriteLine(hello.Substring(5));
            //Console.WriteLine(hello);

            //loops
            //Console.WriteLine("enter your age");
            //string ageStr = Console.ReadLine();
            //int age = Convert.ToInt32(ageStr);
            //bool isBanned = true;
            //if(age<2 && isBanned)
            //{
            //    Console.WriteLine("You are just born");
            //}

            //else if(age<12){
            //    Console.WriteLine("Please complete your high school");
            //}
            //else if (age < 18)
            //{
            //    Console.WriteLine("You are below 18");
            //} 

            //switch case

            //int age = 78;
            //switch (age)
            //{
            //    case 18:
            //        Console.WriteLine("please wait for an year");
            //        break;
            //    case 20:
            //        Console.WriteLine("you are 20");
            //        break;
            //    default:
            //        Console.WriteLine("enjoy!");
            //        break;
            //}

            //loops

            //while loop
            //int i = 0;
            //while (i < 5)
            //{
            //    Console.WriteLine(i + 1);
            //    i++;
            //}

            //do while loop
            //int i = 0;
            //do
            //{
            //    Console.WriteLine(i + 1);
            //    i++;
            //} while (i < 5);

            //for loop
            //for(int i=0; i<5; i++)
            //{
            //    if (i == 0)
            //    {
            //        continue;
            //    }
            //    Console.WriteLine(i + 1);
            //}

            // Break and Continue
            // Break - leave this loop forever
            // continue - leave this particular iteration of the loop


            //Greet();





            Console.ReadLine();
        }
    }
}
