export interface ISource{
    _id: string;
    sender: string;
    recipients: string[];
    cc: string[];
    text: string;
    bcc: string[];
    to: string[];
    date: string;
    subject: string;
}

export interface IEmail{
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: ISource;
}