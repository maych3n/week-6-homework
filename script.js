console.log('Remove this console log and get started!')

const data = {
  channels: [
    {
        title: 'travel',
        videoIds: ['canada', 'italy', 'thailand']
        },
   
  {
        title: 'food',
        videoIds: ['pasta', 'pizza', 'cake']
        },

        {
          title: 'activities',
          videoIds: ['yoga', 'painitng', 'basketball']
          },  
     ]
}

// channels.forEach(selectvideo);
// function selectvideo(){
  let buttonone = document.createElement('button');
  buttonone.innerHTML='travel';

  let channels = document.getElementById ('channels');
  channels.appendChild(buttonone);

// }

buttonone.addEventListener('click', function(){
data.channels.forEach(channels,index,arr)
});
