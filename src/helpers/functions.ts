const normalCommands = ['help', 'whois', 'projects' , 'skills' , 'socials', 'banner','education'] as const;
const utilityCommands = ['cv' , 'clear','gui','history'] as const;

type NormalCommandsType = typeof normalCommands[number];
type UtilityCommandsType = (typeof utilityCommands)[number];

const isNormalCommand: (input: string) => input is NormalCommandsType = (input: string): input is NormalCommandsType => {
    return normalCommands.includes(input as NormalCommandsType);
}

const isUtilityCommand: (input: string) => input is UtilityCommandsType = (input: string): input is UtilityCommandsType => {
    return utilityCommands.includes(input as UtilityCommandsType);
}

const getSimilarCommands = (input : string) => {
    const matchingCommands:string[] = [...normalCommands,...utilityCommands].filter((c) => c.startsWith(input));
    return matchingCommands;
}

const getYear = () => {
    return new Date().getFullYear();
}

const getAge = (birthDate: Date) => {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const downloadFile = (uri: string, downloadName: string) => {
    const link = document.createElement("a");
    link.download = downloadName;
    link.href = uri;
    link.click();
    link.remove();
  };

export {normalCommands, utilityCommands, isNormalCommand, isUtilityCommand, getSimilarCommands , getYear, getAge, downloadFile}
export type {NormalCommandsType, UtilityCommandsType}