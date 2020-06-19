/*
  Created by : Aakriti Gupta
  Date : 20-12-2019
*/

export =
  {
    "GETCONTESTANTSHOW": {
      key: "contestants_sid_{##SHOWID##}",
      TTL: "86400"
    },

    "TEAMLIST": {
      key: "team_list_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "10800"
    },
    "TEAMNAME": {
      key: "team_name_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "10800"
    },
    "USERLEAGUELISTING": {
      key: "league_list_sid_{##SHOWID##}_uid_{##USERID##}_lid_{##LEAGUEID##}_off_{##OFFSET##}_lmt_{##LIMIT##}",
      TTL: "86400"
    },
    "USERLEAGUELISTING_ALL": {
      key: "league_list_all_sid_{##SHOWID##}_uid_{##USERID##}",
      TTL: "86400"
    },
    "USERLEAGUCOUNT": {
      key: "league_count_sid_{##SHOWID##}_uid_{##USERID##}",
      TTL: "86400"
    },
    "GETTHEMEDETAIL": {
      key: "theme_sid_{##SHOWID##}",
      TTL: "86400"
    },
    "GETPAGECONTENT": {
      key: "pagecontent_{##SHOWID##}_lid_{##LEAGUEID##}_type_{##TYPE##}",
      TTL: "86400"
    },
    "GETLEAGUEDETAIL": {
      key: "league_sid_{##SHOWID##}_lid_{##LEAGUEID##}",
      TTL: "86400"
    },
    "GETUSERPROFILE": {
      key: "profile_{##USERID##}",
      TTL: "86400"
    },
    "GETDFPDETAIL": {
      key: "dfp_sid_{##SHOWID##}_lid_{##LEAGUEID##}",
      TTL: "86400"
    },
    "GETINTERACTIVITY": {
      key: "interactivity_sid_{##SHOWID##}_lid_{##LEAGUEID##}",
      TTL: "86400"
    },
    "GETCONTESTANTSCORE": {
      key: "contestant_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}_cid_{##CONTESTANTID##}",
      TTL: "3600"
    },
    "GETSCOREDETAILS": {
      key: "scoredetails_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "3600"
    },
    "GETSCORE": {
      key: "score_sid_{##SHOWID##}_uid_{##USERID##}_lid_{##LEAGUEID##}",
      TTL: "3600"
    },
    "GETOVERALLLEADERBOARD" : {
      key: "overallleaderboard_sid_{##SHOWID##}_lid_{##LEAGUEID##}",
      TTL: "3600"
    },
    "GETCURRECTUSERSCORE": {
      key: "currentuserscore_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "3600"
    },
    "CHECKUSERTEAM": {
      key: "teamexist_sid_{##SHOWID##}_uid_{##USERID##}_lid_{##LEAGUEID##}",
      TTL: "86400"
    },
    "USERLEAGUEJOINEDSTATUS": {
      key: "leaguejoined_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "86400"
    },
    // "GETBONUS": {
    //   key: "getbonus_sid_{##SHOWID##}",
    //   TTL: "86400"
    // },
    
    "GETCONTESTANTDETAIL": {
      key: "contestantdetail_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "86400"
    },
    "GETLEGAUEUSERCOUNT": {
      key: "participant_sid_{##SHOWID##}_lid_{##LEAGUEID##}_uid_{##USERID##}",
      TTL: "86400"
    }
  }





