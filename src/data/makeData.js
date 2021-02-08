//import namor from 'namor'

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    kycId: "00001",
    bpId: "",
    rmEmail: "mark@nomura.com",
    lmEmail: "kristina@nomura.com",
    caseInitiator: "",
    requestType: "Onboarding",
    status: "Drafted",
    createdDate: "02-02-2021",
    lastUpdatedDate: "03-02-2021",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
