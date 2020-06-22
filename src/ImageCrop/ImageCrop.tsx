import React, { cloneElement, useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Box } from '../Box';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '../Modal';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '../Slider';
import { Stepper, StepperItem } from '../Stepper';
import getCroppedImg from './CropImage';
import useImageCropStyle from './styles';

export const ImageCrop = ({ src, aspect = 4 / 3, setCroppedImage, trigger }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const { root: containerStyleProps, controls: controlsStyleProps } = useImageCropStyle(null);

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const steps = ['Upload', 'Crop Image'];

    const onCropComplete = useCallback((croppedArea, croppedAreaPixelsNew) => {
        setCroppedAreaPixels(croppedAreaPixelsNew);
    }, []);

    const makeCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(src, croppedAreaPixels, rotation);
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels, rotation]);

    const closeModal = () => {
        setIsOpen(false);
    };

    const closeWithSave = () => {
        makeCroppedImage();
        closeModal();
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
    };

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            closeWithSave();
        } else {
            handleComplete();
            setActiveStep(activeStep + 1);
        }
    };

    console.log('the active step', activeStep);

    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Stepper
                            activeStep={activeStep}
                            completed={completed}
                            setActiveStep={setActiveStep}
                            steps={steps}
                        >
                            {steps.map((step, i) => {
                                return <StepperItem>{step}</StepperItem>;
                            })}
                        </Stepper>
                    </ModalHeader>

                    <ModalCloseButton onClick={closeModal} position="absolute" top="8px" right="12px" />

                    <ModalBody>
                        <Box {...containerStyleProps}>
                            <Cropper
                                image={src}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                aspect={aspect}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </Box>
                        <Box {...controlsStyleProps}>
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={zoomChange => setZoom(zoomChange)}
                            >
                                <SliderTrack />
                                <SliderFilledTrack />
                                <SliderThumb />
                            </Slider>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup>
                            <Button variant="tertiary" onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {trigger &&
                cloneElement(trigger, {
                    onClick: () => setIsOpen(!isOpen),
                })}
        </>
    );
};
