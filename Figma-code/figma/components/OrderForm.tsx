import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Mail, Phone, MapPin, Send } from "../../../node_modules/lucide-react/dist/lucide-react";
import { toast } from "sonner@2.0.3";

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paintingType: "",
    size: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      paintingType: "",
      size: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="order" className="py-24 bg-gradient-to-br from-[#F5D5CE] via-white to-[#FAE8E3]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl text-[#0A2E35] mb-6">Commission Your Painting</h2>
          <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
          <p className="text-xl text-[#2D5A63]">
            Ready to own an original Elena Rodriguez painting? Fill out the form below and we'll 
            help you bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="paintingType">Type of Painting *</Label>
                <Select 
                  value={formData.paintingType}
                  onValueChange={(value) => setFormData({ ...formData, paintingType: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abstract">Abstract</SelectItem>
                    <SelectItem value="landscape">Landscape</SelectItem>
                    <SelectItem value="portrait">Portrait</SelectItem>
                    <SelectItem value="contemporary">Contemporary</SelectItem>
                    <SelectItem value="custom">Custom Commission</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="size">Preferred Size</Label>
                <Select 
                  value={formData.size}
                  onValueChange={(value) => setFormData({ ...formData, size: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (24" × 30")</SelectItem>
                    <SelectItem value="medium">Medium (30" × 40")</SelectItem>
                    <SelectItem value="large">Large (36" × 48")</SelectItem>
                    <SelectItem value="xlarge">Extra Large (48" × 60")</SelectItem>
                    <SelectItem value="custom">Custom Size</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Vision *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vision, color preferences, or any specific requests..."
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-[#C9A961] hover:bg-[#D4B574] text-white"
              >
                Submit Inquiry
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl text-[#0A2E35] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#E8B8B0] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#0A2E35]" />
                  </div>
                  <div>
                    <p className="text-[#0A2E35] mb-1">Email</p>
                    <p className="text-[#2D5A63]">elena@rodriguezart.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E8B8B0] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#0A2E35]" />
                  </div>
                  <div>
                    <p className="text-[#0A2E35] mb-1">Phone</p>
                    <p className="text-[#2D5A63]">+34 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#E8B8B0] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#0A2E35]" />
                  </div>
                  <div>
                    <p className="text-[#0A2E35] mb-1">Studio</p>
                    <p className="text-[#2D5A63]">Barcelona, Spain</p>
                    <p className="text-[#2D5A63]">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C9A961] to-[#D4B574] rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl mb-4">Commissioning Process</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-[#C9A961] rounded-full flex items-center justify-center">1</span>
                  <p>Submit your inquiry with details about your vision</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-[#C9A961] rounded-full flex items-center justify-center">2</span>
                  <p>Receive a personalized quote within 24-48 hours</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-[#C9A961] rounded-full flex items-center justify-center">3</span>
                  <p>Approve the concept and provide a 50% deposit</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-[#C9A961] rounded-full flex items-center justify-center">4</span>
                  <p>Receive progress updates as your painting comes to life</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-white text-[#C9A961] rounded-full flex items-center justify-center">5</span>
                  <p>Final payment and delivery (typically 4-6 weeks)</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
