interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (
    firstName: string,
    lastName: string
): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

abstract class StudentClassInterface {
    firstName: string;
    lastName: string;

    abstract workOnHomework(): string;
    abstract displayName(): string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export class StudentClass extends StudentClassInterface {
    firstName: string;
    lastName: string;

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
