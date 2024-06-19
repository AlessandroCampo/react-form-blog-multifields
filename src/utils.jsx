import { format, differenceInMinutes, differenceInHours, differenceInDays, differenceInWeeks, differenceInYears } from 'date-fns';
import {
    SportsSoccer,
    SportsSoccerOutlined,
    MusicNoteOutlined,
    MusicNote,
    Book,
    BookOutlined,
    Movie,
    MovieOutlined,
    TravelExplore,
    TravelExploreOutlined,
    LocalDining,
    LocalDiningOutlined,
    Computer,
    ComputerOutlined,
    Nature,
    NatureOutlined,
    Palette,
    PaletteOutlined,
    FitnessCenter,
    FitnessCenterOutlined,
    Work,
    WorkOutlined,
    Pets,
    PetsOutlined,
    School,
    SchoolOutlined,
    Favorite,
    FavoriteBorder,
    Face,
    FaceOutlined,
    ThumbUp,
    ThumbUpOutlined
} from '@mui/icons-material';


export const formatTimestamp = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);

    const minutes = differenceInMinutes(now, date);
    const hours = differenceInHours(now, date);
    const days = differenceInDays(now, date);
    const weeks = differenceInWeeks(now, date);
    const years = differenceInYears(now, date);

    if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} ${days > 1 ? 'days' : 'day'} ago`;
    } else if (years < 1) {
        return format(date, 'dd MMM');
    } else {
        return format(date, 'MMMM yyyy');
    }
}



export const postCategories = [
    'Sports',
    'Science',
    'Traveling',
    'Memes',
    'Technology',
    'Food',
    'Health',
    'Fitness',
    'Fashion',
    'Art',
    'Music',
    'Movies',
    'Books',
    'Education',
    'Politics'
];


export const tags = [
    { label: 'Sport', icon: <SportsSoccerOutlined />, checkedIcon: <SportsSoccer /> },
    { label: 'Music', icon: <MusicNoteOutlined />, checkedIcon: <MusicNote /> },
    { label: 'Books', icon: <BookOutlined />, checkedIcon: <Book /> },
    { label: 'Movies', icon: <MovieOutlined />, checkedIcon: <Movie /> },
    { label: 'Travel', icon: <TravelExploreOutlined />, checkedIcon: <TravelExplore /> },
    { label: 'Food', icon: <LocalDiningOutlined />, checkedIcon: <LocalDining /> },
    { label: 'Tech', icon: <ComputerOutlined />, checkedIcon: <Computer /> },
    { label: 'Nature', icon: <NatureOutlined />, checkedIcon: <Nature /> },
    { label: 'Art', icon: <PaletteOutlined />, checkedIcon: <Palette /> },
    { label: 'Fitness', icon: <FitnessCenterOutlined />, checkedIcon: <FitnessCenter /> },
    { label: 'Work', icon: <WorkOutlined />, checkedIcon: <Work /> },
    { label: 'Pets', icon: <PetsOutlined />, checkedIcon: <Pets /> },
    { label: 'Education', icon: <SchoolOutlined />, checkedIcon: <School /> },
    { label: 'Health', icon: <FavoriteBorder />, checkedIcon: <Favorite /> },
    { label: 'Hobbies', icon: <PaletteOutlined />, checkedIcon: <Palette /> }
];
