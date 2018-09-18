const Vue = require("nativescript-vue");

Vue.registerElement("VideoPlayer", () => require("./nativescript-videoplayer").Video);

new Vue({

  template: `
    <Page class="page">
      <ActionBar title="" class="action-bar" backgroundColor="#ED1B24" />
      <ScrollView>
        <StackLayout class="home-panel">
          <VideoPlayer ref="player" src="http://poa.lms.poatv.co.tz:6060/live/F63B1D6583FE4034A29AC617818548C4/playlist.m3u8?sid=3ff3d98205a547b6bef97a4103dd695e" autoplay="true" height="300" /> 

          <Button class="btn btn-primary" text="Play" @tap="$refs.player.nativeView.play()" />
          <Button class="btn btn-primary" text="Pause" @tap="$refs.player.nativeView.pause()" />
          <Button class="btn btn-primary" text="Go To 30 seconds" @tap="$refs.player.nativeView.seekToTime(30000)" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

}).$start();