//Declaration merging 
interface Customer {
    // saves the customer somewhere 
    save(): void
}
class Customer {}
const customer1 = new Customer()

customer1.save = function() {} 