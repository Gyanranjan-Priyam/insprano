import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'INSPRANO 2026 - Annual Techno-Cultural Fest | GCE Kalahandi'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #121212 0%, #1F1147 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid pattern background - Satori compatible */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 122, 24, 0.1) 0px, rgba(255, 122, 24, 0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(255, 122, 24, 0.1) 0px, rgba(255, 122, 24, 0.1) 1px, transparent 1px, transparent 50px)',
            opacity: 0.3,
          }}
        />

        {/* Glow effect - expanded gradient instead of blur for Satori compatibility */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255, 122, 24, 0.3) 0%, rgba(255, 122, 24, 0.2) 20%, rgba(255, 122, 24, 0.1) 40%, rgba(255, 122, 24, 0.05) 60%, transparent 80%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            zIndex: 1,
          }}
        >
          {/* Year tag */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#FF7A18',
              letterSpacing: '0.4em',
              opacity: 0.8,
              border: '1px solid rgba(255, 122, 24, 0.4)',
              padding: '6px 20px',
            }}
          >
            ANNUAL TECHNO-CULTURAL FEST 2026
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: '#FF7A18',
              letterSpacing: '0.15em',
              textShadow: '0 0 80px rgba(255, 122, 24, 0.6), 0 0 160px rgba(255, 122, 24, 0.3)',
            }}
          >
            INSPRANO
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: '#ffffff',
              opacity: 0.8,
              letterSpacing: '0.15em',
            }}
          >
            GCE KALAHANDI • BHAWANIPATNA • ODISHA
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 48,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#FF7A18',
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  opacity: 0.6,
                  letterSpacing: '0.2em',
                }}
              >
                EVENTS
              </div>
            </div>

            <div
              style={{
                width: 2,
                height: 80,
                background: 'rgba(255, 122, 24, 0.3)',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#FF7A18',
                }}
              >
                2000+
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  opacity: 0.6,
                  letterSpacing: '0.2em',
                }}
              >
                PARTICIPANTS
              </div>
            </div>

            <div
              style={{
                width: 2,
                height: 80,
                background: 'rgba(255, 122, 24, 0.3)',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#FF7A18',
                }}
              >
                ₹5L+
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: '#ffffff',
                  opacity: 0.6,
                  letterSpacing: '0.2em',
                }}
              >
                PRIZES
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, transparent, #FF7A18, transparent)',
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
