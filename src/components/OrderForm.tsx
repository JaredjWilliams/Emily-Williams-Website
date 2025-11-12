import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import styles from "./OrderForm.module.scss";

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
    <section id="order" className={styles.orderForm}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Commission Your Painting</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Ready to own an original Emily Williams painting? Fill out the form below and we'll 
            help you bring your vision to life.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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
                    <SelectItem value="abstract">Home</SelectItem>
                    <SelectItem value="landscape">Pets</SelectItem>
                    <SelectItem value="portrait">Campuses</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
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
                className={styles.submitButton}
              >
                Submit Inquiry
                <Send />
              </Button>
            </form>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Contact Information</h3>
              
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Mail className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <p className={styles.label}>Email</p>
                    <p className={styles.value}>Emily.Williams@gmail.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <Phone className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <p className={styles.label}>Phone</p>
                    <p className={styles.value}>+1 (317) 555-1234</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <p className={styles.label}>Studio</p>
                    <p className={styles.value}>Indianapolis, Indiana</p>
                    <p className={styles.value}>By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.processCard}>
              <h3 className={styles.processTitle}>Commissioning Process</h3>
              <ol className={styles.processList}>
                <li className={styles.processItem}>
                  <span className={styles.processNumber}>1</span>
                  <p className={styles.processText}>Submit your inquiry with details about your vision</p>
                </li>
                <li className={styles.processItem}>
                  <span className={styles.processNumber}>2</span>
                  <p className={styles.processText}>Receive a personalized quote within 24-48 hours</p>
                </li>
                <li className={styles.processItem}>
                  <span className={styles.processNumber}>3</span>
                  <p className={styles.processText}>Approve the concept and provide a 50% deposit</p>
                </li>
                <li className={styles.processItem}>
                  <span className={styles.processNumber}>4</span>
                  <p className={styles.processText}>Receive progress updates as your painting comes to life</p>
                </li>
                <li className={styles.processItem}>
                  <span className={styles.processNumber}>5</span>
                  <p className={styles.processText}>Final payment and delivery (typically 4-6 weeks)</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
