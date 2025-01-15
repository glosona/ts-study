import IPerson from "./ch02-2/person/IPerson"
import Person from "./ch02-2/person/Person"
import Chance from "chance"
import * as R from "ramda"

const chance = new Chance()
let persons: IPerson[] = R.range(0,2).map((n:number) => new Person(chance.name(), chance.age()))
console.log(persons)