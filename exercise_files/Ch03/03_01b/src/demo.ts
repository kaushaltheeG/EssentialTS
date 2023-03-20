type ContactName = string;

//with enum 
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

//avoid enum 
type ContactStatus2 =  "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    status2?: ContactStatus2; 
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//version 1
interface AddressableContact extends Contact, Address{}
//version 2 
type AddressableContact2 = Contact & Address

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: 'kzk',
    status: ContactStatus.Inactive,
    status2: "inactive"
}
