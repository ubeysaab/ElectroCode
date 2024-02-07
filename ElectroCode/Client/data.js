import { faker } from "@faker-js/faker";

let duyuru = ()=> {
  return {

    img: faker.image.urlPicsumPhotos(),
    title: faker.lorem.sentence(5),
    text: faker.lorem.paragraphs(),
    date: faker.date.recent({days:10})
  }
};
// console.log(duyuru())

let duyurular = [];

for (let i = 0; i < 10; i++) {
  duyurular.push(duyuru());
}

console.log(duyurular);
export default duyurular;
