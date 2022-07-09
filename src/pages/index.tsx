import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { FiUpload } from 'react-icons/fi'
import theme from '../styles/theme'
import Dropzone from '../components/Dropzone'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card
          title='Upload' 
          iconRight={
            <FiUpload 
              size="1.5rem"
              style={{color: theme.colors.detail}}
              />
          }
        >
          <Dropzone />
        </Card>
      </main>
    </div>
  )
}

export default Home