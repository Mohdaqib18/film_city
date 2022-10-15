import Reac, {useEffect} from "react";
import {Divider, List, ListItem , ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";
import {useTheme} from '@mui/styles';
import useStyles from './styles';
import {useGetGenresQuery} from '../../services/TMDB';
import  genresIcon from '../../assets/genres'
import {selectGenreOrCategory} from '../../features/currentGenreOrCategory';

import {useSelector, useDispatch} from 'react-redux';




const redLogo = 'https://fontmeme.com/permalink/221014/1c2af171c80c77c957bc7e3641205cf3.png';

const blueLogo = 'https://fontmeme.com/permalink/221014/1c2af171c80c77c957bc7e3641205cf3.png';

const categories =[{label: 'Popular', value: 'popular'},
{label: 'Top Rated', value: 'top_rated'},
{label: 'Upcoming', value: 'upcoming'}]





const Sidebar = ({setMobileOpen}) => {
const {genreIdOrCategoryName}= useSelector((state) => state.currentGenreOrCategory)
 const theme = useTheme();
 const classes = useStyles();
 const {data, isFetching, error} = useGetGenresQuery();
 const dispatch = useDispatch();

 useEffect(() => {
  setMobileOpen(false);
 },[ genreIdOrCategoryName])

 console.log(data);
    return (

        <>
            <Link to="/" className={classes.imageLink}>
                <img
                  className={classes.image}
                  src={ theme.palette.mode === "light" ? redLogo : blueLogo} 
                    alt='Filmpire logo'
                  />
            </Link>

            <Divider />

            <List>
                <ListSubheader>
                    Categories
                </ListSubheader>
                {categories.map(({label, value}) =>(
                    <Link key={value} className={classes.links} to='/'>
                        <ListItem onClick={() =>dispatch(selectGenreOrCategory(value))} button>
                        <ListItemIcon>
                                <img src={genresIcon[label.toLowerCase()]} className={classes.genreImage} height={30}/>
                            </ListItemIcon>
                            <ListItemText primary={label}/>
                        </ListItem>
                    </Link>
                ))}


            </List>

            <Divider />

            <List>
                <ListSubheader>
                    Genres
                </ListSubheader>
                {isFetching ? ( <Box display="flex" justifyContent='center'>
        <CircularProgress /> </Box>): data.genres.map(({name, id}) =>( 
                    <Link key={id} className={classes.links} to='/'>
                        <ListItem onClick={() =>dispatch(selectGenreOrCategory(id))} button>
                            <ListItemIcon>
                                <img src={genresIcon[name.toLowerCase()]} className={classes.genreImage} height={30}/>
                            </ListItemIcon>
                            <ListItemText primary={name}/>
                        </ListItem>
                    </Link>
                ))}
              


            </List>

        </>
    )
}
export default Sidebar;