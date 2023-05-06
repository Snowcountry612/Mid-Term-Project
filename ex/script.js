const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB'
];

const contactMethods = [
  {
    name: 'Email',
    value: 'myemail@example.com'
  },
  {
    name: 'Phone',
    value: '+1 (123) 456-7890'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/myprofile'
  }
];

const skillsList = document.querySelector('#skills ul');
const contactList = document.querySelector('#contact ul');

// Add skills to the list
skills.forEach(skill => {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Add contact methods to the list
contactMethods.forEach(method => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = method.name;
  a.href = method.value;
  li.appendChild(a);
  contactList.appendChild(li);
});
