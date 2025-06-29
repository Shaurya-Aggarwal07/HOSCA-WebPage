'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {FaLinkedin,FaEnvelope} from "react-icons/fa";
import { ImageGrid } from "@/components/ui/image-grid";
import { Suspense } from "react";

interface ClubMember {
  id: number;
  name: string;
  position: string;
  year: string;
  branch: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
  instagramUrl: string;
}

const LiteraryMembers: ClubMember[] = [
  {
    id: 1,
    name: 'Add Name',
    position: 'Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 2,
    name: 'Add Name',
    position: 'Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 3,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 4,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 5,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  },
  {
    id: 6,
    name: 'Add Name',
    position: 'Sub-Coordinator',
    year: 'Add Year',
    branch: 'Add Branch',
    email: 'Add Email',
    linkedinUrl: '#',
    instagramUrl: '#',
    imageUrl: '',
  }
];

export default function LiteraryPage() {
  return (
    <div className="relative min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 mt-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Literary Society</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Where words weave magic and stories come to life.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <CardContainer className="w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
              <h2 className="text-2xl font-bold text-neutral-700 dark:text-white mb-4">About Literary Society</h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                The Literary Society of IIT Patna is a vibrant community of writers, poets, and literature enthusiasts. We celebrate the power of words through various literary activities and events that foster creativity and critical thinking.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">What We Do</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Poetry recitations</li>
                  <li>Creative writing workshops</li>
                  <li>Book discussions</li>
                  <li>Literary competitions</li>
                  <li>Storytelling sessions</li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-white mb-3">Our Events</h3>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300 space-y-2">
                  <li>Poetry Slam</li>
                  <li>Creative Writing Competition</li>
                  <li>Book Club Meetings</li>
                  <li>Literary Festivals</li>
                  <li>Author Interactions</li>
                </ul>
              </div>
            </CardBody>
          </CardContainer>

          {/* Gallery Section */}
          <div className="mb-16">
            <ImageGrid 
              images={[
                "/ClubPages/Literary/literary-1.jpg",
                "/ClubPages/Literary/literary-2.jpg",
                "/ClubPages/Literary/literary-3.jpg",
                "/ClubPages/Literary/literary-4.jpg",
                "/ClubPages/Literary/literary-5.jpg",
                "/ClubPages/Literary/literary-6.jpg",
                "/ClubPages/Literary/literary-7.jpg",
                "/ClubPages/Literary/literary-8.jpg"
              ]} 
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>

        {/* Coordinators Section */}
        <h2 className="text-3xl font-semibold text-left mb-6 text-orange-300 px-2 md:px-0" style={{ color: "#4169E1" }}>Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
          {LiteraryMembers.slice(0, 2).map((member) => renderMemberCard(member))}
        </div>

        {/* Sub Coordinators Section */}
        <h2 className="text-3xl font-semibold text-left mt-12 mb-6 text-orange-300 px-4 md:px-0" style={{ color: "#4169E1" }}>Sub Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 md:px-0 justify-items-center">
          {LiteraryMembers.slice(2).map((member) => renderMemberCard(member))}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/hosca.iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/hosca_iitp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#E1306C] hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/user/CULTatIITP"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
} 