import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    Container,
    Paper,
    withStyles,
    createStyles, InputBase
} from "@material-ui/core";

import {grey} from "@material-ui/core/colors";
import {Tweet} from "../components/tweet";
import {SideMenu} from "../components/SideMenu";
import {theme} from "../theme";




export const useHomeStyles = makeStyles(()=> ({
    wrapper: {
        height: '100vh',
    },
    logoIcon: {
        fontSize: 36,
    },
    logo: {
      margin: '10px -10px'
    },
    sideMenuList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '0 10px',
            borderRadius: 30,
            height: 55,
            transition: 'all 0.15s ease',
            '&:hover': {
                background: 'rgba(29,161,242, 0.1)',
                color: theme.palette.primary.main,
            }
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 15,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    sideMenuListButton: {
       width: '85%',
       padding: theme.spacing(3),
       marginTop: theme.spacing(2)
    },
    tweet: {
      cursor: 'pointer',
      paddingTop: 15,
      paddingLeft: 20,
      '&:hover': {
          backgroundColor: 'rgb(245,248,250)',
      },
    },
    tweetsWrapper: {
      borderRadius: 0,
      height: '100%',
      borderTop: '0',
      borderBottom: '0',
    },
    tweetsHeader: {
        borderRadius: 0,
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        padding: '10px 15px',

        '& h6': {
            fontWeight: 800
        }
    },
    tweetsFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      marginLeft: 0,
    },
    tweetsUserName: {
        color: grey[500]
    },
}))

const SearchTextField = withStyles(() =>
    createStyles ({
        input: {
            borderRadius: 30,
            backgroundColor: '#e6ecf0',
            height: 45,
            padding: '0 10px',
        }
}))(InputBase)


export const Home = () => {

        const classes = useHomeStyles();
        return (
            <Container className={classes.wrapper} maxWidth='lg'>
                <Grid container  spacing={3}>
                    <Grid item xs={3}>
                        <SideMenu classes={classes} />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant="outlined">
                            <Paper className={classes.tweetsHeader} variant="outlined">
                                <Typography variant="h6">Главная</Typography>
                            </Paper>
                            {
                                [...new Array(20)].fill (
                                    <Tweet
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, illum."
                                        classes={classes}
                                        user={{
                                            fullname: "Girl",
                                            username: "Beaty",
                                            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                                        }}
                                    />
                                )
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <SearchTextField placeholder="Поиск в Твиттере" />
                    </Grid>
                </Grid>
            </Container>

        );
}

