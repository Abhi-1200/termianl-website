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


export {normalCommands, utilityCommands, isNormalCommand, isUtilityCommand, getSimilarCommands , getYear}
export type {NormalCommandsType, UtilityCommandsType}