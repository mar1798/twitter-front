import React from 'react';
import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";
import RepostIcon from "@material-ui/icons/LoopSharp";
import LikeIcon from "@material-ui/icons/FavoriteBorderSharp";
import ReplyIcon from "@material-ui/icons/Reply";
import {useHomeStyles} from "../pages/Home/theme";
import {Link} from "react-router-dom";


interface TweetProps {
    _id: string,
    text: string,
    classes: ReturnType<typeof useHomeStyles>;
    user: {
      fullname: string,
      username: string,
      avatarUrl: string
    };
}

export const Tweet: React.FC<TweetProps> = ({classes, text, user, _id}: TweetProps): React.ReactElement => {
        return (
            <div>
                <Link className={classes.tweetWrapper} to={`/home/tweets/${_id}`}>
                    <Paper variant="outlined" className={classNames(classes.tweet ,classes.tweetsHeader)}>
                            <Avatar alt={`Аватар пользователя ${user.fullname}`}
                                    src={`${user.avatarUrl}`}
                            />
                            <div>
                                <Typography>
                                    <b>{user.fullname}</b>
                                    <span className={classes.tweetUserName}>@{user.username}</span>
                                    <span className={classes.tweetUserName}> ` </span>
                                    <span className={classes.tweetUserName}>1 h</span>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {text}
                                </Typography>
                                <div className={classes.tweetFooter}>
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
                            </div>
                    </Paper>
                </Link>
            </div>
        );
    }

