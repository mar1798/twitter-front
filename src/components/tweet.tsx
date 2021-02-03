import React from 'react';
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/LoopSharp";
import LikeIcon from "@material-ui/icons/FavoriteBorderSharp";
import ReplyIcon from "@material-ui/icons/Reply";
import {useHomeStyles} from "../pages/Home";


interface TweetProps {
    text: String,
    classes: ReturnType<typeof useHomeStyles>;
    user: {
      fullname: String,
      username: String,
      avatarUrl: String
    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user}: TweetProps): React.ReactElement => {
        return (
            <div>

                    <Paper variant="outlined" className={classNames(classes.tweet ,classes.tweetsHeader)}>
                        <Grid container spacing={3}>
                            <Grid item xs={2}>
                                <Avatar alt={`Аватар пользователя ${user.fullname}`}
                                        src={`${user.avatarUrl}`}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>
                                    <b>{user.fullname}</b>
                                    <span className={classes.tweetsUserName}>@{user.username}</span>
                                    <span className={classes.tweetsUserName}> ` </span>
                                    <span className={classes.tweetsUserName}>1 h</span>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {text}
                                </Typography>
                                <div className={classes.tweetsFooter}>
                                    <div>
                                        <IconButton color="primary">
                                            <MessageIcon style={{fontSize: '18px'}} />
                                        </IconButton>
                                        <span style={{fontSize: '12px'}}>1</span>
                                    </div>
                                    <div>
                                        <IconButton color="primary">
                                            <RepostIcon style={{fontSize: '18px'}} />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton color="primary">
                                            <LikeIcon style={{fontSize: '18px'}} />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton color="primary">
                                            <ReplyIcon style={{fontSize: '18px'}} />
                                        </IconButton>
                                    </div>

                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
            </div>
        );
    }

