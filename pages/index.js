import Head from 'next/head';
import Layout from './components/layout';

export default function Home () {
  return(
      <Layout>
        <Head>
        <title>Sistem Pencatatan Produksi Beras - SPPB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Selamat Datang di SPPB</h1>
      <p>redirect ke Beranda setelah sukses login <br />
      isikan tabel log pencatatan terakhir maks 10 baris</p>
      
      </Layout>
  );
}