
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Play, Music, ExternalLink, Instagram, Youtube} from 'lucide-react'
import { FaTelegramPlane, FaVk, FaTicketAlt } from 'react-icons/fa'
import { FaYandex } from 'react-icons/fa'
import PrivacyPolicy from './components/PrivacyPolicy'
import CookieNotice from './components/CookieNotice'

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 20px rgba(255, 255, 255, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.5)",
        "0 0 20px rgba(255, 255, 255, 0.3)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://static.lumi.new/86/8601e723afd6573b7b14a67fdf9dc1a8.webp"
          alt="Jony"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{ x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Artist Name */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tight font-heading"
            variants={glowVariants}
            animate="animate"
          >
            JONY
          </motion.h1>
          <motion.div
            className="w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-4 max-w-2xl leading-relaxed font-display"
        >
          Официальный артист
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed"
        >
          Новые треки • Концерты • Билеты
        </motion.p>

        {/* Main Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold text-lg rounded-full overflow-hidden shadow-2xl font-heading"
            onClick={() => window.open('https://music.apple.com', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <Play className="w-6 h-6" fill="currentColor" />
              Слушать Музыку
            </div>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
              initial={false}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-12 py-4 border-2 border-white text-white font-semibold text-lg rounded-full overflow-hidden backdrop-blur-sm bg-white/10 shadow-2xl font-heading"
            onClick={() => window.open('https://afisha.yandex.ru', '_blank')}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-3">
              <FaTicketAlt className="w-6 h-6" />
              Афиша 2024-2025
            </div>
          </motion.button>
        </motion.div>

        {/* Social Links and Platforms */}
        <motion.div
          variants={itemVariants}
          className="space-y-8"
        >
          {/* Music Platforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/80 font-heading">Музыкальные платформы</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Music, href: 'https://open.spotify.com', label: 'Spotify', color: 'bg-green-600' },
                { icon: Youtube, href: 'https://music.youtube.com', label: 'YouTube Music', color: 'bg-red-600' },
                { icon: Music, href: 'https://music.apple.com', label: 'Apple Music', color: 'bg-gray-800' }
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full ${color} hover:opacity-90 transition-all duration-300 text-white font-medium`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/80 font-heading">Социальные сети</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/jony', label: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
                { icon: FaVk, href: 'https://vk.com/jony', label: 'VKontakte', color: 'bg-blue-600' },
                { icon: FaTelegramPlane, href: 'https://t.me/jony', label: 'Telegram', color: 'bg-blue-500' },
                { icon: Youtube, href: 'https://youtube.com/@jony', label: 'YouTube', color: 'bg-red-600' }
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full ${color} hover:opacity-90 transition-all duration-300 text-white font-medium`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Ticket Platforms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white/80 font-heading">Билеты на концерты</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: FaYandex, href: 'https://afisha.yandex.ru', label: 'Яндекс Афиша', color: 'bg-yellow-600' },
                { icon: FaTicketAlt, href: 'https://ticketland.ru', label: 'TicketLand', color: 'bg-indigo-600' }
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-6 py-3 rounded-full ${color} hover:opacity-90 transition-all duration-300 text-white font-medium`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Music Notes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`note-${i}`}
              className="absolute text-white/20 text-5xl font-display"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50
              }}
              animate={{
                y: -100,
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 8
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-gray-800 py-8 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl mx-auto">
              Мы не продаем билеты, а только предоставляем информацию и ссылки на лицензированных билетных операторов. 
              Все вопросы по концертам уточняйте у организаторов и билетных операторов.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
            <motion.button
              onClick={() => setShowPrivacyPolicy(true)}
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
              whileHover={{ scale: 1.05 }}
            >
              Политика конфиденциальности
            </motion.button>
            <motion.a
              href="https://afisha.yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
              whileHover={{ scale: 1.05 }}
            >
              Афиша 2024-2025
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Все права защищены ©️ jonyconcert.ru
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}

      {/* Cookie Notice */}
      <CookieNotice />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  )
}

export default App
