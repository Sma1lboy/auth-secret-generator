'use client'

import { useState } from 'react'
import Link from 'next/link'
import { generateSecret } from '@/lib/common'

// Key icon component
function KeyIcon() {
  return (
    <svg className="key-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="7.5" r="5.5"/>
      <path d="m21 2-9.6 9.6"/>
      <path d="m15.5 7.5 3 3L22 7l-3-3"/>
    </svg>
  )
}

export default function Home() {
  const [secret, setSecret] = useState('')
  const [showSecret, setShowSecret] = useState(false)
  const [copyText, setCopyText] = useState('Copy')

  const handleGenerate = () => {
    const newSecret = generateSecret()
    setSecret(newSecret)
    setShowSecret(true)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(secret)
      setCopyText('Copied!')
      setTimeout(() => {
        setCopyText('Copy')
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="app">
      {/* Background */}
      <div className="grid-background"></div>
      <div className="spotlight"></div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">
            <KeyIcon />
            <span>Auth Secret Generator</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="content">
          <h1 className="title">Generate Auth Secret</h1>
          <p className="description">
            Create cryptographically secure secrets for authentication and API keys
          </p>

          <input
            type="text"
            className="secret-input"
            value={secret}
            readOnly
            placeholder="Your generated secret will appear here"
          />

          <div className="button-group">
            <button className="generate-btn" onClick={handleGenerate}>
              Generate
            </button>

            {showSecret && (
              <button className="copy-btn-bottom" onClick={handleCopy}>
                {copyText}
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <span className="footer-text">Built for secure secret generation</span>
          <span className="footer-divider">•</span>
          <span className="footer-text">
            Built by{' '}
            <a
              href="https://github.com/codefox-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              codefox
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
