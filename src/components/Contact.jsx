import React, { useState } from 'react';
import { profileData } from '../data/profile';
import { Mail, Github, Linkedin, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import './Contact.css';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      setCopied(false);
    }
  };

  const handleCopyDraft = async () => {
    if (!message.trim()) return;
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${message}`);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    } catch (err) {
      setCopiedDraft(false);
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profileData.socialLinks.email
  )}${subject ? `&su=${encodeURIComponent(subject)}` : ''}${message ? `&body=${encodeURIComponent(message)}` : ''}`;

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and Social Channels">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's discuss software engineering.</h2>
          <p className="section-description">
            Whether you want to discuss backend architecture, academic collaboration, open-source projects, or potential opportunities, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Channels Column */}
          <div className="contact-channels-col">
            {/* Primary Email Card */}
            <div className="contact-card card contact-email-card">
              <div className="contact-card-icon" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-channel-label">Direct Email</span>
                <a
                  href={profileData.socialLinks.gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email-address"
                  aria-label="Send direct email to Mohammad Arif Khan via Gmail (opens in new tab)"
                >
                  {profileData.socialLinks.email}
                </a>
                <p className="contact-card-note">
                  Primary channel for academic inquiries, software opportunities, and technical discussions.
                </p>
              </div>

              <div className="contact-email-actions">
                <a
                  href={profileData.socialLinks.gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                  aria-label="Send email via Gmail (opens in new tab)"
                >
                  <Send size={14} aria-hidden="true" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`btn btn-sm ${copied ? 'btn-secondary contact-copied-btn' : 'btn-secondary'}`}
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="copied-check" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card card contact-link-card"
              aria-label="GitHub Profile (Arif1234-cpu) - opens in new tab"
            >
              <div className="contact-card-icon" aria-hidden="true">
                <Github size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-channel-label">GitHub</span>
                <span className="contact-link-name">github.com/Arif1234-cpu</span>
                <p className="contact-card-note">
                  Repositories, code solutions, algorithm implementations, and open-source contributions.
                </p>
              </div>
              <ExternalLink size={18} className="contact-link-arrow" aria-hidden="true" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card card contact-link-card"
              aria-label="LinkedIn Profile (Mohammad Arif Khan) - opens in new tab"
            >
              <div className="contact-card-icon" aria-hidden="true">
                <Linkedin size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-channel-label">LinkedIn</span>
                <span className="contact-link-name">linkedin.com/in/arif1234</span>
                <p className="contact-card-note">
                  Professional updates, engineering network, and academic milestones at AMU.
                </p>
              </div>
              <ExternalLink size={18} className="contact-link-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Quick Draft Helper */}
          <div className="contact-composer-card card">
            <div className="composer-header">
              <div className="composer-icon" aria-hidden="true">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="composer-title">Draft a Quick Message</h3>
                <span className="composer-subtitle">Opens Gmail directly in a new tab</span>
              </div>
            </div>

            <form
              className="composer-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="form-input"
                  placeholder="e.g. Machine Learning Collaboration / Technical Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  rows={4}
                  placeholder="Hello Arif, I came across your portfolio and wanted to reach out regarding..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="composer-actions">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary composer-submit-btn"
                  aria-label="Open draft in Gmail (opens in new tab)"
                >
                  <Send size={15} aria-hidden="true" />
                  <span>Send via Gmail</span>
                </a>

                {message.trim() && (
                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="btn btn-secondary composer-copy-btn"
                  >
                    {copiedDraft ? (
                      <>
                        <Check size={14} className="copied-check" aria-hidden="true" />
                        <span>Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} aria-hidden="true" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
