const fs = require("fs/promises");

async function Process1() {
    await fs.mkdir("Odev", { recursive: true }, (err) => {
    if (err){
         throw err;
    }
  });
  return;
}

async function Process2() {
    await fs.writeFile(
    "employees.json",
    JSON.stringify({"name": "Employee 1 Name", "salary": 2000}),
    "utf8",
    (err) => {
      if (err){ 
          throw err;
      }
    }
  );
  return;
}

async function Process3() {
   await fs.readFile("employees.json", "utf8", (err) => {
    if (err) {
        throw err;
    }
  });
  return;
}

async function Process4() {
  await fs.writeFile(
    "employees.json",
    JSON.stringify({"name": "Employee 1 Name", "salary": 5000}),
    "utf8",
    (err) => {
      if (err) { 
          throw err;
      }
    }
  );
  return;
}

async function Process5() {
   await fs.unlink("employees.json", (err) => {
    if (err){ 
        throw err;
    }
  });
  return;
}

async function allprocess() {
  try {
    await Process1();
    await Process2();
    await Process3();
    await Process4();
    await Process5();
  } catch (error) {
    console.log(error);
  }
}  

allprocess();
