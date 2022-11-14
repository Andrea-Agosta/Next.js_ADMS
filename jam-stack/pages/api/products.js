const contentful = require('contentful')
const client = contentful.createClient({
  space: '79up8egatzj5',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yUvuiHolvcKkCyisAfDRADPO5gWTO42OvvOTXa90PBo'
})
export default function handler(req, res) {
  client.getEntries()
    .then((response) => {
      res.status(200).json(response.items)
      console.log(response.items)
    })
    .catch(console.error)
}