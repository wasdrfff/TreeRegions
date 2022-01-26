export function getRegions(){
        return fetch('/api/regions')
          .then((resp) => resp.json())
      }
