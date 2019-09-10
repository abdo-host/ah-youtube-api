/* 
 * @name : Youtube API v3
 * @author : Tatwerat Team ( Abdo Hamoud )
 * @url : www.tatwerat.com
 */

const YTAPI = {

    api: function (query, key) {

        //https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,statistics,snippet&id=UCsim_WStpPtRtxMShy7_VAQ&key=AIzaSyCIuVnDuCtVW6IPvOKEC59Wxwn829mqpEk

        return (`https://www.googleapis.com/youtube/v3/${query}&key=${key}`);
    },

    call: function (options) {
        if (options) {
            switch (options.method) {
                case 'channel_info':
                    return this.channel_info(options.channel_id, options.api_key);
                    break;

                default:
                    return 'null';
                    break;
            }
        }
    },

    channel_info: function (channel_id, key) {
        return this.api(`channels?part=brandingSettings,statistics,snippet&id=${channel_id}`, key);
    }

};


module.exports = YTAPI;


