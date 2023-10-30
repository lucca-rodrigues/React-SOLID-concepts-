# Use Cypress base image
FROM cypress/browsers:node18.12.0-chrome106-ff106

# Change to a non-root user
USER 1001

#rest of your dockerfile here