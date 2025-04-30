import { Type } from './../../node_modules/event-target-shim/index.d';
interface Riwayat {
    id: number,
    title: string,
    location: string,
    transaksi: number,
    tanggal: string,
    tgl: string,
    waktu: string,
    status: number,
    metodePembayaran: string,
    biayaPlatfom: number,
    idTransaksi: string,
    image_url: string,
}

export  type  Riwayats = Riwayat[]