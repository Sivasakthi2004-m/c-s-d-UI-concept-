import { Layout } from '@/components/Layout';
import { Settings as SettingsIcon, Bell, Shield, Key, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export const Settings = () => {
    return (
        <Layout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Settings</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Manage your account and application preferences
                    </p>
                </div>

                {/* Settings Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Settings */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Profile Section */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <SettingsIcon className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-semibold">Profile Settings</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Full Name</Label>
                                        <Input defaultValue="Security Admin" className="bg-background" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Role</Label>
                                        <Input defaultValue="Enterprise Admin" className="bg-background" disabled />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            defaultValue="admin@darkwatch.io"
                                            className="pl-10 bg-background"
                                        />
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <Button variant="default">Save Changes</Button>
                            </div>
                        </div>

                        {/* Security Section */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-semibold">Security</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Current Password</Label>
                                    <div className="relative">
                                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input type="password" className="pl-10 bg-background" placeholder="••••••••" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>New Password</Label>
                                        <Input type="password" className="bg-background" placeholder="••••••••" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Confirm Password</Label>
                                        <Input type="password" className="bg-background" placeholder="••••••••" />
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <Button variant="default">Update Password</Button>
                            </div>
                        </div>
                    </div>

                    {/* Preferences Sidebar */}
                    <div className="space-y-6">
                        {/* Notifications */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Bell className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-semibold">Notifications</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Email Alerts</p>
                                        <p className="text-xs text-muted-foreground">High-risk findings</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Browser Notifications</p>
                                        <p className="text-xs text-muted-foreground">Real-time alerts</p>
                                    </div>
                                    <Switch />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Weekly Reports</p>
                                        <p className="text-xs text-muted-foreground">Summary emails</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </div>
                        </div>

                        {/* API Settings */}
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-semibold">API Access</h2>
                            </div>

                            <div className="space-y-3">
                                <div className="space-y-2">
                                    <Label className="text-xs">API Key</Label>
                                    <Input
                                        defaultValue="dk_live_••••••••••••"
                                        className="bg-background font-mono text-xs"
                                        disabled
                                    />
                                </div>

                                <Button variant="outline" size="sm" className="w-full">
                                    Generate New Key
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Settings;
