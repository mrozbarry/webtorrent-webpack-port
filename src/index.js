import WebTorrent from 'webtorrent'

let client = new WebTorrent()
client.on('torrent', (torrent) => {
  console.log('Torrent added:', torrent)
})
client.add('http://releases.ubuntu.com/16.04/ubuntu-16.04-desktop-amd64.iso.torrent')
