
export interface Talent {
    id: string;
    name: string;
    country: string;
    phoneNumber: string;
    signalPriority: 'LOW' | 'MEDIUM' | 'HIGH';
    status: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEW';
    stars: number;
    isNew: boolean;
    isFollowed: boolean;
    imgUrl: string;
}

export interface Talents {
    [key: string]: Talent;
}

export interface Column {
    id: string;
    title: string;
    taskIds: string[];
}

export interface Columns {
    [key: string]: Column;
}

export interface DashboardData {
    tasks: Talents;
    columns: Columns;
    columnOrder: string[];
}


