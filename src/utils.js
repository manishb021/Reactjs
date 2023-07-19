

const paginate = (followers) => {
const itemsPerPage = 10 
const numberofPages = Math.ceil(followers.length/itemsPerPage);

//logic to genrate new follwers per page

const newFollowers =  Array.from({length: numberofPages}, (_, index) => {


const start = index * itemsPerPage;
return followers.slice(start, start + itemsPerPage);
});
return newFollowers;
}
export default paginate