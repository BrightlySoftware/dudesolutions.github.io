<template>
 <div>
    <a id="feed" class="twitter-timeline" href="https://twitter.com/hashtag/JoinTheDude" data-widget-id="666335403570393090">#JoinTheDude Tweets</a>
  </div>
</template>

<script>
var TwitterWidgetsLoader = require('twitter-widgets'); 
export default {
  name: 'DudeTweets',
  mounted () {
    TwitterWidgetsLoader.load(function(err, twttr) {
    if (err) {
        //do some graceful degradation / fallback
        return;
    }
 
    twttr.widgets.createTimeline({url:'https://twiter.com/hashtag/jointhedude'}, document.getElementById('feed'));
});
  }
};
</script>
<style>
</style>