const Vue = require("nativescript-vue");


      Vue.registerElement("VideoPlayer", () => require("./nativescript-videoplayer").Video);

      new Vue({

        template: 
        
        
        
         
        
        `

    <Page class="page" marginBottom="40">
     <ActionBar title="TVE" class="action-bar" backgroundColor="#ED1B24" textAlignment="center" />
      <Button row="0" class="btn btn-primary btn-rounded-lg" text="NEXT SHOWS" backgroundColor="#ED1B24"></Button>
  
   
 
      <StackLayout class="form">
      
       <VideoPlayer ref="player" src="http://poa.lms.poatv.co.tz:6060/live/F63B1D6583FE4034A29AC617818548C4/playlist.m3u8?sid=3ff3d98205a547b6bef97a4103dd695e" autoplay="true" height="300" /> 
         
             <Button row="1" class="btn btn-primary btn-rounded-lg" text="NEXT SHOWS" backgroundColor="#ED1B24"></Button>
        <Button row="2"class="btn btn-outline" text="2:00pm   LAIKABO"></Button>
        <Button row="3" class="btn btn-outline" text="2:00pm   LAIKABO"></Button>
        <Button row="4"  class="btn btn-outline" text="2:00pm   LAIKABO"></Button>
        <Button row="5" class="btn btn-outline" text="2:00pm   LAIKABO"></Button>
    
      
    
 
  `,

      }).$start()
    
    ;