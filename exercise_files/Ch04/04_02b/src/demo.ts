type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
    email: string;
}

interface Query<Tprop> {
    sort?: 'asc' | 'desc';
    matches(val: Tprop): boolean;
}

//type ContactQuery = Partial<Record<keyof Contact, Query>>;

//Map technique 
//makes all key options 
type ContactQuery = {
    [Tprop in keyof Contact]?: Query<Contact[Tprop]> 
}

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property] as Query<Contact[keyof Contact]>;
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);