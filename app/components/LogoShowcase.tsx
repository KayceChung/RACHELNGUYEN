import { Card } from "./ui/card";
import { Logo, LogoCompact } from "./Logo";
import { motion } from "motion/react";

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-[#FEFBF6] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A050] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Brand Identity
          </p>
          <h1 className="mb-6 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-heading)' }}>
            Rachel Nguyễn
          </h1>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed text-lg">
            Luxury personal branding for a travel & tourism professional
          </p>
        </motion.div>

        {/* Primary Logo - Signature Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Primary Logo — Signature Style
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Light background */}
            <Card className="p-12 bg-white border-[#2C5F6F]/10 flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-[#2C5F6F] mb-8">
                <Logo variant="signature" />
              </div>
              <p className="text-[#6B6B6B] text-sm text-center">On Light Background</p>
            </Card>

            {/* Dark background */}
            <Card className="p-12 bg-gradient-to-br from-[#2C5F6F] to-[#3D7B8E] border-0 flex flex-col items-center justify-center min-h-[300px]">
              <div className="text-white mb-8">
                <Logo variant="signature" />
              </div>
              <p className="text-white/80 text-sm text-center">On Dark Background</p>
            </Card>
          </div>
        </motion.div>

        {/* Monogram Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Secondary Logo — RN Monogram
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Light background */}
            <Card className="p-12 bg-white border-[#2C5F6F]/10 flex flex-col items-center justify-center min-h-[250px]">
              <div className="text-[#2C5F6F] mb-6">
                <Logo variant="monogram" />
              </div>
              <p className="text-[#6B6B6B] text-sm text-center">On Light</p>
            </Card>

            {/* Gold accent background */}
            <Card className="p-12 bg-[#F4EDE4] border-[#C9A050]/20 flex flex-col items-center justify-center min-h-[250px]">
              <div className="text-[#C9A050] mb-6">
                <Logo variant="monogram" />
              </div>
              <p className="text-[#6B6B6B] text-sm text-center">On Warm Tone</p>
            </Card>

            {/* Dark background */}
            <Card className="p-12 bg-[#2C5F6F] border-0 flex flex-col items-center justify-center min-h-[250px]">
              <div className="text-[#C9A050] mb-6">
                <Logo variant="monogram" />
              </div>
              <p className="text-white/80 text-sm text-center">On Dark</p>
            </Card>
          </div>
        </motion.div>

        {/* Compact Logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Compact Version — Mobile & Small Spaces
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-12 bg-white border-[#2C5F6F]/10 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-[#2C5F6F] mb-6">
                <LogoCompact />
              </div>
              <p className="text-[#6B6B6B] text-sm text-center">Compact Light</p>
            </Card>

            <Card className="p-12 bg-[#2C5F6F] border-0 flex flex-col items-center justify-center min-h-[200px]">
              <div className="text-white mb-6">
                <LogoCompact />
              </div>
              <p className="text-white/80 text-sm text-center">Compact Dark</p>
            </Card>
          </div>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Usage Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-[#2C5F6F]/10">
              <h3 className="mb-4 text-[#2C5F6F]" style={{ fontFamily: 'var(--font-subheading)' }}>
                ✓ Do
              </h3>
              <ul className="space-y-3 text-[#6B6B6B]">
                <li className="flex gap-3">
                  <span className="text-[#5F8A75] mt-1">✓</span>
                  <span>Use signature logo for website header and main applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5F8A75] mt-1">✓</span>
                  <span>Use monogram for social media profile pictures and favicons</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5F8A75] mt-1">✓</span>
                  <span>Maintain minimum clear space around logo equal to height of compass symbol</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5F8A75] mt-1">✓</span>
                  <span>Use approved color variations: Ocean Deep, Gold Accent, or White</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5F8A75] mt-1">✓</span>
                  <span>Ensure logo is legible at all sizes (minimum 100px wide for signature)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-[#B85C4E]/20 bg-[#B85C4E]/5">
              <h3 className="mb-4 text-[#B85C4E]" style={{ fontFamily: 'var(--font-subheading)' }}>
                ✗ Don't
              </h3>
              <ul className="space-y-3 text-[#6B6B6B]">
                <li className="flex gap-3">
                  <span className="text-[#B85C4E] mt-1">✗</span>
                  <span>Don't alter logo proportions or stretch</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B85C4E] mt-1">✗</span>
                  <span>Don't use colors outside the approved palette</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B85C4E] mt-1">✗</span>
                  <span>Don't add effects like shadows, gradients, or outlines to logo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B85C4E] mt-1">✗</span>
                  <span>Don't place logo on busy backgrounds that reduce legibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#B85C4E] mt-1">✗</span>
                  <span>Don't rotate or flip the logo</span>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Color Palette Reference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Brand Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Ocean Deep", color: "#2C5F6F", text: "white" },
              { name: "Gold Accent", color: "#C9A050", text: "white" },
              { name: "Warm Sand", color: "#F4EDE4", text: "#2A2A2A" },
              { name: "Terracotta", color: "#D4896A", text: "white" },
              { name: "Ivory White", color: "#FEFBF6", text: "#2A2A2A" },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden border-[#2C5F6F]/10">
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="font-mono text-xs opacity-70" style={{ color: item.text }}>
                    {item.color}
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-[#2A2A2A] text-sm font-medium text-center">{item.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="mb-8 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-subheading)' }}>
            Recommended Applications
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-[#2C5F6F]/10">
              <h4 className="mb-3 text-[#2C5F6F]" style={{ fontFamily: 'var(--font-subheading)' }}>
                Digital
              </h4>
              <ul className="space-y-2 text-[#6B6B6B] text-sm">
                <li>• Website header</li>
                <li>• Email signature</li>
                <li>• LinkedIn profile</li>
                <li>• Social media</li>
                <li>• Digital presentations</li>
              </ul>
            </Card>

            <Card className="p-6 border-[#2C5F6F]/10">
              <h4 className="mb-3 text-[#C9A050]" style={{ fontFamily: 'var(--font-subheading)' }}>
                Print
              </h4>
              <ul className="space-y-2 text-[#6B6B6B] text-sm">
                <li>• Business cards</li>
                <li>• Letterhead</li>
                <li>• Proposal documents</li>
                <li>• Brochures</li>
                <li>• Certificates</li>
              </ul>
            </Card>

            <Card className="p-6 border-[#2C5F6F]/10">
              <h4 className="mb-3 text-[#D4896A]" style={{ fontFamily: 'var(--font-subheading)' }}>
                Marketing
              </h4>
              <ul className="space-y-2 text-[#6B6B6B] text-sm">
                <li>• Tour packages</li>
                <li>• Event materials</li>
                <li>• Merchandise</li>
                <li>• Signage</li>
                <li>• Promotional items</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
