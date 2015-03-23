


  Template.hello.helpers({
      uploads: function(){
          return Uploads.find();
      },
      images: function(){
          return Images.find();
      }
  });

  Template.hello.events({

      'change .fileInput': function (event, template) {
          FS.Utility.eachFile(event, function(file){
              var fileObject = new FS.File(file);
              Images.insert(fileObject, function(error){
                  if(error){
                      console.log(error);
                  }
                  else{
                      console.log("Successfully uploaded: " +fileObject._id);
                  }
              });
          })
      }

  });


