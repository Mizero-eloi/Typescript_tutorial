// Generics in typescript

function getFirstElement<ElementType>(array : ElementType []) {
    return array[0];
}


const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);

const strings = ["apple", "banana", "cherry"];
const firstString = getFirstElement(strings); // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.

// Where we used generics before without knowing

// Example: Document.querySelector

const input = document.querySelector<HTMLInputElement>(".input");
// input?.value // Error: Property 'value' does not exist on type 'Element | null'.

input?.value // Now works because we specified the type of the element

// Example: Array.map

const a = [1, 2, 3];

a.map(() => "whatever");

// it's impossible to nest generic types

const map = new Map<string, Map<string, string>>();


type  ApiResponse<Data>  =  {
    data: Data;
    isError: boolean;
}

type UserResponse = ApiResponse<{name: string, age: number}>
type BlogResponse = ApiResponse<{title: string, content: string}>;

const response: UserResponse = {
    data: { 
        name: "Kyle",
        age: 28
    },
    isError: false
}

// predefining the type or rule we use extend

type ApiResponse1<Data extends object = {status: number}> = {
    data: Data;
    isError: boolean;

}

const response1: ApiResponse1<{status: string;}> =  {
    data: {
        status: "success"
    },
    isError: false

} 