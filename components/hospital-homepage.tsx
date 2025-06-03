import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Search, PhoneCall, Calendar, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HospitalHomepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>15, Water Corporation Drive, Vr</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call us: +234-702-524-4440</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@htsurgery.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon - Sun: 24 Hours</span>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-teal-400">hts</span>
              <span className="text-gray-600 ml-2 text-lg font-normal">HOSPITAL</span>
            </div>
            <div className="text-xs text-gray-500 ml-2">The Place of Healing and Surgery</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-teal-400 font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-teal-400">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-teal-400">
              Our Services
            </Link>
            <Link href="#" className="text-gray-600 hover:text-teal-400">
              Gallery
            </Link>
            <Link href="#" className="text-gray-600 hover:text-teal-400">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400" />
            <Button className="bg-teal-300 hover:bg-teal-400 text-white px-6">Appointment</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Surgery Image */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/surgery-hero.jpg"
            alt="Medical professionals performing surgery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/90 rounded-full p-4 mb-8">
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">hts</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            Expert Surgical Care With Advanced Technology
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Providing exceptional surgical services with a team of highly skilled professionals
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-teal-300 hover:bg-teal-400 text-white py-6 text-lg font-medium">
              <Search className="w-5 h-5 mr-2" />
              Find Service
            </Button>
            <Button className="bg-teal-300 hover:bg-teal-400 text-white py-6 text-lg font-medium">
              <PhoneCall className="w-5 h-5 mr-2" />
              Emergency Contact
            </Button>
            <Button className="bg-teal-300 hover:bg-teal-400 text-white py-6 text-lg font-medium">
              <Calendar className="w-5 h-5 mr-2" />
              Request Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-400 mb-8">Welcome To Hospital</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Users className="w-8 h-8 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Professional Staff</h3>
                <p className="text-gray-600 leading-relaxed">
                  We have professionally trained staff that provide optimum care and services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Shield className="w-8 h-8 text-teal-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Emergency Treatment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are always prepared and ready to provide highly efficient emergency services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
