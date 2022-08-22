# Construction Machine management

### Hosted URL 

Application is deployed here to quickly review the output.

https://visionary-shortbread-ac7953.netlify.app/types
<img width="1619" alt="Screenshot 2022-08-22 at 10 08 20 AM" src="https://user-images.githubusercontent.com/3119576/185840717-56911f01-5d7a-43e3-963e-3c81c1d4860f.png">
<img width="1625" alt="Screenshot 2022-08-22 at 10 08 27 AM" src="https://user-images.githubusercontent.com/3119576/185840724-b93d36e3-f9dc-42dc-9411-a5669432e0e2.png">


### Tech Stack
- Typescript
- ReactJs
- Redux and Redux Toolkit
- TailwindCss
- React Testing Library

### Local Setup

- Clone or Download the repo.
- Run `npm install` inside the directory.
- Run `npm start` to spin up the local dev setup.



#### Tasks

- [x] Created the UI
- [x] Staff member can create different machine types
- [x] Staff member can specify which attributes the machine type has
- [x] Available attributes are date, text, checkbox or number
- [x] Staff member can able to remove attributes that are no longer required
- [x] All machines of one type share attributes 
- [x] Staff member can pick one of the attributes as a title attribute for the machines of one type (For eg. model).
- [x] Staff member can set a title for a machine type (Chainsaw, Bulldozer, ...)
- [x] Staff member can able to add new machine types as well as to edit or delete existing ones at any time
- [x] Staff member can have many machines of each machine type ( for example 6 chainsaws from different brands that have different characteristics)
- [x] Staff member can able to filter by machine type (See all chain saws, all bull dozers, ...).
- [x] Staff member can able see all machines grouped by their type on one screen
- [x] Staff member can able to add new machines as well as to edit or delete existing ones at any time
- [x] Staff member can use URL navigation
- [x] All data will be saved even after page reload
- [x] Staff member can able to use the app on mobile phone or tablet as well as on the computer


### Test Cases

`npm test` for running unit test cases

Due to shortage of time, I wasn't able to write much of the test cases but I have written and you can review them
for the reducer in [MachineTypingSlice.spec.ts](https://github.com/sarabs3/construction-on-rent/blob/main/src/features/machineTypes/MachineTypingSlice.spec.ts) file and for components under [/components](https://github.com/sarabs3/construction-on-rent/tree/main/src/components) directory.






![Alt Text](https://media.giphy.com/media/TBZEgKryt6NSPXUKBG/giphy.gif)



I hope you will enjoy reviewing the code as much as I enjoyed while writing it ❤️ 
