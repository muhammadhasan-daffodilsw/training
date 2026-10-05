

async function fetchUsers(users)
{
    let jobs = [];
    for (let user of users)
    {
        let job = fetch(`https://api.github.com/users/${user}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );

    jobs.push(job);
    }

    let response = Promise.all(jobs);

    return response;

}

let jobs = await fetchUsers(['valerian060','valerian']);

console.log(jobs);